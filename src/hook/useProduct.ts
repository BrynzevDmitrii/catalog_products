import { useQuery } from "@tanstack/react-query"
import { GoodsService } from "../services/goods.service"

export const useProduct = (id: number)=>{
return useQuery(['product'], ()=> GoodsService.getById(id),
{
  select:({data}) => data,
})
}