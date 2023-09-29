import { useQuery } from "@tanstack/react-query"
import { GoodsService } from "../services/goods.service"

export const useProduct = (id: number)=>{
return useQuery(['product'], ()=> GoodsService.getById(id),
{
  select:(data) => {
    if(data )
    {
    let uploadListProduct = []
    const cashUploadList =  window.localStorage.getItem('newProductsList')
    if(cashUploadList){
      uploadListProduct = [... JSON.parse(cashUploadList)] 
      const cashProduct = uploadListProduct.filter(item=>item.id === id)

    return cashProduct[0];
    }
    
    
    }
  return data
  }
})
}