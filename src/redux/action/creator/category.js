import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoryType } from "../type/category";
import { getCategories } from "../../../utils/http";

export const getCategoryActionCreator = createAsyncThunk(getCategoryType, async (_, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getCategories();

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});
