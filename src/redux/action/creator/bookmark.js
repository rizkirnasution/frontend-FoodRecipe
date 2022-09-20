import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getBookmarkType,
    getBookmarkByUserIdType,
    postBookmarkType,
    deleteBookmarkType
} from '../type/bookmark'
import {
    getBookmarks,
    getBookmarkByUserId,
    postBookmark,
    deleteBookmark
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

export const getBookmarkActionCreator = thunkAction(getBookmarkType, getBookmarks)
export const getBookmarkByUserIdActionCreator = thunkAction(getBookmarkByUserIdType, getBookmarkByUserId)
export const postBookmarkActionCreator = thunkAction(postBookmarkType, postBookmark)
export const deleteBookmarkActionCreator = thunkAction(deleteBookmarkType, deleteBookmark)
