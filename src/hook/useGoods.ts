import { useQuery } from "@tanstack/react-query"
import { GoodsService } from "../services/goods.service"

export const useGoods = ()=>{
return useQuery(['goods'], ()=> GoodsService.allGoods(),
{
  select:({data}) => data,
})
}