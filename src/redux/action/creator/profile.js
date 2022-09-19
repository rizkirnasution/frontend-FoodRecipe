import { createAsyncThunk } from '@reduxjs/toolkit'
import { putProfileType } from '../type/profile'
import { updateProfile } from '../../../utils/http'

const thunkAction = (action, api) => createAsyncThunk(action, async (data, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        const response = await api(data?.id, data?.value)

        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const putProfileActionCreator = thunkAction(putProfileType, updateProfile)
