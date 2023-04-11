import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_artist_list = createAsyncThunk(
  "artists/api_v1_artist_list",
  async payload => {
    const response = await apiService.api_v1_artist_list(payload)
    return response.data
  }
)
export const api_v1_artist_create = createAsyncThunk(
  "artists/api_v1_artist_create",
  async payload => {
    const response = await apiService.api_v1_artist_create(payload)
    return response.data
  }
)
export const api_v1_artist_read = createAsyncThunk(
  "artists/api_v1_artist_read",
  async payload => {
    const response = await apiService.api_v1_artist_read(payload)
    return response.data
  }
)
export const api_v1_artist_update = createAsyncThunk(
  "artists/api_v1_artist_update",
  async payload => {
    const response = await apiService.api_v1_artist_update(payload)
    return response.data
  }
)
export const api_v1_artist_partial_update = createAsyncThunk(
  "artists/api_v1_artist_partial_update",
  async payload => {
    const response = await apiService.api_v1_artist_partial_update(payload)
    return response.data
  }
)
export const api_v1_artist_delete = createAsyncThunk(
  "artists/api_v1_artist_delete",
  async payload => {
    const response = await apiService.api_v1_artist_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_artist_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_artist_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_artist_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_artist_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_artist_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_artist_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_artist_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_artist_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_artist_list,
  api_v1_artist_create,
  api_v1_artist_read,
  api_v1_artist_update,
  api_v1_artist_partial_update,
  api_v1_artist_delete,
  slice: artistsSlice
}
