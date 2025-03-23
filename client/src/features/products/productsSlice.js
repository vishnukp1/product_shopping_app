// src/features/products/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosConfig';

// Fetch products from backend
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('/products');
    return response.data.data
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
