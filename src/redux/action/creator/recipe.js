import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipeType, getRecipeByIdType, getRecipeByUserIdType, postRecipeType, putRecipeType, deleteRecipeType } from "../type/recipe";
import { getRecipes, getRecipeById, getRecipeByUserId, postRecipe, putRecipe, deleteRecipe } from "../../../utils/http";

export const getRecipeActionCreator = createAsyncThunk(getRecipeType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getRecipes(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getRecipeByIdActionCreator = createAsyncThunk(getRecipeByIdType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getRecipeById(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getRecipeByUserIdActionCreator = createAsyncThunk(getRecipeByUserIdType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await getRecipeByUserId(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postRecipeActionCreator = createAsyncThunk(postRecipeType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await postRecipe(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const putRecipeActionCreator = createAsyncThunk(putRecipeType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await putRecipe(data?.id, data?.value);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteRecipeActionCreator = createAsyncThunk(deleteRecipeType, async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await deleteRecipe(data);

    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});
