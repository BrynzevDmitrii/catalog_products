import axios from "axios"
import { ICreateProduct, IProduct } from "../types/Product"

export const GoodsService = {
    allGoods: async () => {
        return (await axios.get<IProduct[]>('https://fakestoreapi.com/products'))
    },

    getById: async (id:number)=>{
        return (await axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`)).data
        
    },

    postCreate:async (data?:ICreateProduct)=>{
        
        return axios.post('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {   
                    id: data?.id,
                    title: data?.title,
                    price: data?.price,
                    description: data?.description,
                    image: data?.image,
                    category: data?.category
                }
            )
        })
    },
}