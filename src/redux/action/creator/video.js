import { createAsyncThunk } from "@reduxjs/toolkit";
import { postVideoType, putVideoType, deleteVideoType } from "../type/video";
import { postVideo, putVideo, deleteVideo } from "../../../utils/http";

export const postVideoActionCreator = createAsyncThunk(postVideoType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await postVideo(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const putVideoActionCreator = createAsyncThunk(putVideoType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await putVideo(data?.id, data?.value);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteVideoActionCreator = createAsyncThunk(deleteVideoType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await deleteVideo(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});
