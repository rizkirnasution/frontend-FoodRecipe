import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLikerType, getLikerByUserIdType, postLikerType, deleteLikerType } from "../type/liker";
import { getLikers, getLikerByUserId, postLiker, deleteLiker } from "../../../utils/http";

export const getLikerActionCreator = createAsyncThunk(getLikerType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getLikers(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getLikerByUserIdActionCreator = createAsyncThunk(getLikerByUserIdType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getLikerByUserId(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postLikerActionCreator = createAsyncThunk(postLikerType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await postLiker(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteLikerActionCreator = createAsyncThunk(deleteLikerType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await deleteLiker(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});
