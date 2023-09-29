import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/Product";

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState: {
        basketProducts:[] as unknown as IProduct[],
    } ,
    reducers: {
        addProductBasket(state){
            const cashBasketProducts = window.localStorage.getItem('basket')
            if(cashBasketProducts){
                const cashBasket = [... JSON.parse(cashBasketProducts)]
                if(cashBasket .length!== 0){
                    state.basketProducts  = [... cashBasket]
                }
                return
            } 
            return
        }
,

        addNewProductBasket(_, payload){
            const cashBasketProducts = window.localStorage.getItem('basket')
            //есть ли корзина в localstoreg
            if(cashBasketProducts){
                const cashBasket = [... JSON.parse(cashBasketProducts)]
        
                if(cashBasket .length!== 0){
                    const cashProducts = window.localStorage.getItem('products')
                    const cashUploadList =  window.localStorage.getItem('newProductsList')
                    
           //есть ли с список с дополнеными данными
                    if(cashUploadList){                        
                    const product = [...JSON.parse(cashUploadList)].filter(item=>item.id === payload.payload)
                   
                    const clone = cashBasket.some(item=>item.id === product[0].id)
                    
                    console.log(cashBasket);
                        if(clone){
                            ++cashBasket[0].quantity
                            window.localStorage.setItem('basket', JSON.stringify(cashBasket))
                            console.log('clone');
                        }
                        else if (!clone){
                            product[0].quantity = 1
                            const lastProduct = [...cashBasket, product[0]]
                            window.localStorage.setItem('basket', JSON.stringify(lastProduct))
                        }
                    } 
            // если нет, берем данные с сервера в localstoreg        
                    else if
                    (cashProducts){                        
                        const product = [...JSON.parse(cashProducts)].filter(item=>item.id === payload.payload)
                       
                        const clone = cashBasket.some(item=>item.id === product[0].id)
                        
                            if(clone){
                                ++cashBasket[0].quantity
                                window.localStorage.setItem('basket', JSON.stringify(cashBasket))
                                console.log('clone');
                            }
                            else if (!clone){
                                product[0].quantity = 1
                                const lastProduct = [...cashBasket, product[0]]
                                window.localStorage.setItem('basket', JSON.stringify(lastProduct))
                            }
                        }
                        
                    
                }
                return
            }
        //если корзина в localstoreg отсутствует
            else if(!cashBasketProducts){
                const cashProducts = window.localStorage.getItem('products')
                const cashUploadList =  window.localStorage.getItem('newProductsList')
        //есть ли с список с дополнеными данными
                if(cashUploadList){                        
                    const product = [...JSON.parse(cashUploadList)].filter(item=>item.id === payload.payload)
                    product[0].quantity = 1
                    window.localStorage.setItem('basket', JSON.stringify([product[0]]))
            }
        // если нет, берем данные с сервера в localstoreg
            else if(cashProducts){
                const product = [...JSON.parse(cashProducts)].filter(item=>item.id === payload.payload)
                product[0].quantity = 1
                
                window.localStorage.setItem('basket', JSON.stringify([product[0]]))
            }
        }
    }
}
}
)

   export const {
        addProductBasket,
        addNewProductBasket
    } = basketSlice.actions

    export  default basketSlice.reducer