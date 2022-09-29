import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBookmarkType, getBookmarkByUserIdType, postBookmarkType, deleteBookmarkType } from "../type/bookmark";
import { getBookmarks, getBookmarkByUserId, postBookmark, deleteBookmark } from "../../../utils/http";

export const getBookmarkActionCreator = createAsyncThunk(getBookmarkType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getBookmarks(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getBookmarkByUserIdActionCreator = createAsyncThunk(getBookmarkByUserIdType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getBookmarkByUserId(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postBookmarkActionCreator = createAsyncThunk(postBookmarkType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await postBookmark(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteBookmarkActionCreator = createAsyncThunk(deleteBookmarkType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await deleteBookmark(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});
