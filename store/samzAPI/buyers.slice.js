import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_buyer_list = createAsyncThunk(
  "buyers/api_v1_buyer_list",
  async payload => {
    const response = await apiService.api_v1_buyer_list(payload)
    return response.data
  }
)
export const api_v1_buyer_create = createAsyncThunk(
  "buyers/api_v1_buyer_create",
  async payload => {
    const response = await apiService.api_v1_buyer_create(payload)
    return response.data
  }
)
export const api_v1_buyer_read = createAsyncThunk(
  "buyers/api_v1_buyer_read",
  async payload => {
    const response = await apiService.api_v1_buyer_read(payload)
    return response.data
  }
)
export const api_v1_buyer_update = createAsyncThunk(
  "buyers/api_v1_buyer_update",
  async payload => {
    const response = await apiService.api_v1_buyer_update(payload)
    return response.data
  }
)
export const api_v1_buyer_partial_update = createAsyncThunk(
  "buyers/api_v1_buyer_partial_update",
  async payload => {
    const response = await apiService.api_v1_buyer_partial_update(payload)
    return response.data
  }
)
export const api_v1_buyer_delete = createAsyncThunk(
  "buyers/api_v1_buyer_delete",
  async payload => {
    const response = await apiService.api_v1_buyer_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const buyersSlice = createSlice({
  name: "buyers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_buyer_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_buyer_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_buyer_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_buyer_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_buyer_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_buyer_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_buyer_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_buyer_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_buyer_list,
  api_v1_buyer_create,
  api_v1_buyer_read,
  api_v1_buyer_update,
  api_v1_buyer_partial_update,
  api_v1_buyer_delete,
  slice: buyersSlice
}
