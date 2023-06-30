import { fetchExchangeRate } from "@/app/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchExchangeRates = createAsyncThunk(
    'currency/fetchExchangeRates',
    async (thunkApi) => {
      const rates = await fetchExchangeRate();
      return rates;
    }
  );

const initialState = {
    entities: [],
} as any;

const userSlice = createSlice({
    name: 'currency',
  initialState: {
    rates: null,
    loading: false,
    error: null,
    currency: 'USD',
  },
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.loading = false;
        state.rates = action.payload;
      })
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})
export const { setCurrency } = userSlice.actions;
export default userSlice.reducer;