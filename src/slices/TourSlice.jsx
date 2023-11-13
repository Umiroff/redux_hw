import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const url = 'https://course-api.com/react-tours-project';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const responsive = await fetch(url);
    const data = await responsive.json();
    return data;
});

const initialState = {
    loading: false,
    data: [],
    readmore: false,
}

const TourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        // .addCase(fetchData.rejected, (state) => {
        //     state.loading = false;
        //     state.error = action.error.message
        // })
    }
});

export const tours = (state) => state.tour.data;
export const selectLoading = (state) => state.tour.loading;

export const useData = () => {
    const dispatch = useDispatch();
    const data = useSelector(tours);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchData())
    },[dispatch]);

    return {data, loading};
}

export default TourSlice.reducer;