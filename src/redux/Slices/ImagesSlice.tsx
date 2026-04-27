import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";

export interface Image {
  id: string;
  alt_description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

export interface ImagesState {
  images: Image[];
  searchResults: Image[];
  loading: boolean;
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  searchResults: [],
  loading: false,
  error: null,
};

export const fetchImages = createAsyncThunk("images/fetch", async (page : number, { rejectWithValue }) => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos", {
      params: {
        page,
        order_by: "popular",
        client_id: "TU1xlXrEosH4wMQuQHk0Q4cMKKfDnktcq9r_bUkei6A",
        per_page: 8,
      },
    });

    return response.data;
  }catch (err: any ) {
    return rejectWithValue(err.response?.data || "An error occurred while fetching images.");
  }
});

export const fetchSearchResults = createAsyncThunk("images/fetchSearch", async ({query , page}: {query: string, page: number}, { rejectWithValue }) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        client_id: "TU1xlXrEosH4wMQuQHk0Q4cMKKfDnktcq9r_bUkei6A",
        per_page: 8,
      },
    });
    return response.data.results;
  }catch (err: any ) {
    return rejectWithValue(err.response?.data || "An error occurred while fetching search results.");
  }
});

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      });
  },
});

export default imagesSlice.reducer;