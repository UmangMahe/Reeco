import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        currentProduct: {},
    },

    reducers :{
        setProduct: (state, action)=>{
            state.currentProduct = action.payload
        },
        approve: (state, action)=>{
            let product = {...action.payload}
            state.currentProduct = product
        },
        missing: (state, action)=>{
            let product = {...action.payload.data}
            product['state'] = action.payload.e;
            state.currentProduct = product
        },
    }
})

export const {approve, setProduct, missing} = orderSlice.actions;

export default orderSlice.reducer;