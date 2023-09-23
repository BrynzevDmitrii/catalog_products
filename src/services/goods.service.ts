import axios from "axios"
import { IProduct } from "../types/Product"

export const GoodsService = {
    allGoods: async () => {
        return (await axios.get<IProduct[]>('https://fakestoreapi.com/products'))
    },

    getById: async (id:number)=>{
        return axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
    }
}