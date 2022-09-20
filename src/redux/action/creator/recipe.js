import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getRecipeType,
    getRecipeByIdType,
    getRecipeByUserIdType,
    postRecipeType,
    putRecipeType,
    deleteRecipeType
} from '../type/recipe'
import {
    getRecipes,
    getRecipeById,
    getRecipeByUserId,
    postRecipe,
    putRecipe,
    deleteRecipe
} from '../../../utils/http'

const thunkAction = (action, api) => createAsyncThunk(action, async (data, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        let request

        if (action.startsWith('put/recipe')) request = await api(data?.id, data?.value)

        const response = request || await api(data)

        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getRecipeActionCreator = thunkAction(getRecipeType, getRecipes)
export const getRecipeByIdActionCreator = thunkAction(getRecipeByIdType, getRecipeById)
export const getRecipeByUserIdActionCreator = thunkAction(getRecipeByUserIdType, getRecipeByUserId)
export const postRecipeActionCreator = thunkAction(postRecipeType, postRecipe)
export const putRecipeActionCreator = thunkAction(putRecipeType, putRecipe)
export const deleteRecipeActionCreator = thunkAction(deleteRecipeType, deleteRecipe)
