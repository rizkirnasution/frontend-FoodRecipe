import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCategoryType } from '../type/category'
import { getCategories } from '../../../utils/http'

const thunkAction = (action, api) => createAsyncThunk(action, async (_, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        const response = await api()

        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getCategoryActionCreator = thunkAction(getCategoryType, getCategories)
