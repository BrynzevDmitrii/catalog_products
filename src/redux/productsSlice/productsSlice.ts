import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/Product";

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
      products:null as unknown as IProduct[],
      userUploadProduct: false
    } ,
    reducers: {
        setProducts(state) {
            const cashProducts = window.localStorage.getItem('products')
            const cashUploadList =  window.localStorage.getItem('newProductsList')
            if(cashUploadList){
              state.products = JSON.parse(cashUploadList)
              state.userUploadProduct = false
            }else
            if(cashProducts){
              state.products = JSON.parse(cashProducts)
              state.userUploadProduct = false
            }
            
        },

         setNewProduct( state, payload) {
            const cashProducts = window.localStorage.getItem('products')
            const cashUploadList =  window.localStorage.getItem('newProductsList')
            let uploadListProduct = []
            if(cashUploadList){
              uploadListProduct = [... JSON.parse(cashUploadList)]          
              uploadListProduct.push(payload.payload)   
              window.localStorage.setItem('newProductsList', JSON.stringify(uploadListProduct) )
              state.userUploadProduct = true
              
            } 
            else if(cashProducts)
            {
              uploadListProduct = [... JSON.parse(cashProducts)]
              uploadListProduct.push(payload.payload)   
              window.localStorage.setItem('newProductsList', JSON.stringify(uploadListProduct) )
              state.userUploadProduct = true
              
          }

          
         }
    },
}
)
export const {
    setProducts,
    setNewProduct
} = productsSlice.actions

export default productsSlice.reducer