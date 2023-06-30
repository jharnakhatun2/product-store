import { fetchExchangeRate } from "@/app/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchExchangeRates = createAsyncThunk(
  "currency/fetchExchangeRates",
  async (thunkApi) => {
    const rates = await fetchExchangeRate();
    return rates;
  }
);

interface InitialStateTypes {
  rates: null | string | number;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  entities: Array<{
    /* object properties here */
  }>;
  currency: string;
}

const initialState: InitialStateTypes = {
  entities: [],
  rates: null,
  error: null,
  isLoading: false,
  isError: false,
  currency: "USD",
};

const userSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.entities = action.payload;
        state.error = "";
      })
      .addCase(fetchExchangeRates.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.entities = [];
        state.error = action.error?.message;
      });
  },
});
export const { setCurrency } = userSlice.actions;
export default userSlice.reducer;
