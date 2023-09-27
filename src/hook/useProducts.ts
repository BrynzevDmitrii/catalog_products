import { useQuery } from "@tanstack/react-query"
import { GoodsService } from "../services/goods.service"

export const useProducts = ()=>{
return useQuery(['goods'], ()=> GoodsService.allGoods(),
{
  select:(data) =>{
  const cashProducts = window.localStorage.getItem('products')
  if(!cashProducts){
   window.localStorage.setItem('products', JSON.stringify(data.data)) }
   
}
})}