import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        currentProduct: {}
    },

    reducers :{
        setProduct: (state, action)=>{
            state.currentProduct = action.payload
        },
        approve: (state, action)=>{
            let product = {...action.payload}
            product['state'] = 'approved'
            state.currentProduct = product
        },
        missing: (state, action)=>{
            let product = {...action.payload.currentProduct}
            product['state'] = action.payload.e;
            state.currentProduct = product
        }
    }
})

export const {approve, setProduct, missing} = orderSlice.actions;

export default orderSlice.reducer;