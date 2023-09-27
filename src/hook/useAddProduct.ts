import { useMutation } from "@tanstack/react-query"
import { GoodsService } from "../services/goods.service"
import { ICreateProduct } from "../types/Product"

export const useAddProduct = (data?: ICreateProduct)=>{
return useMutation(['addProduct'], ()=>GoodsService.postCreate(data),{
  onSuccess(data) {
    return data
}
})
}