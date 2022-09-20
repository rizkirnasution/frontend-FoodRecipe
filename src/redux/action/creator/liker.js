import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getLikerType,
    getLikerByUserIdType,
    postLikerType,
    deleteLikerType
} from '../type/liker'
import {
    getLikers,
    getLikerByUserId,
    postLiker,
    deleteLiker
} from '../../../utils/http'

const thunkAction = (action, api) => createAsyncThunk(action, async (data, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        const response = await api(data)

        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getLikerActionCreator = thunkAction(getLikerType, getLikers)
export const getLikerByUserIdActionCreator = thunkAction(getLikerByUserIdType, getLikerByUserId)
export const postLikerActionCreator = thunkAction(postLikerType, postLiker)
export const deleteLikerActionCreator = thunkAction(deleteLikerType, deleteLiker)
