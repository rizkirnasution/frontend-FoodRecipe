import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    postVideoType,
    putVideoType,
    deleteVideoType
} from '../type/video'
import {
    postVideo,
    putVideo,
    deleteVideo
} from '../../../utils/http'

const thunkAction = (action, api) => createAsyncThunk(action, async (data, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        let request

        if (action.startsWith('put/video')) request = await api(data?.id, data?.value)

        const response = request || await api(data)

        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const postVideoActionCreator = thunkAction(postVideoType, postVideo)
export const putVideoActionCreator = thunkAction(putVideoType, putVideo)
export const deleteVideoActionCreator = thunkAction(deleteVideoType, deleteVideo)
