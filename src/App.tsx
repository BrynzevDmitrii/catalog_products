import { ProductList } from './components/Body/components/ProductList/ProductList'
import { IProduct } from './types/Product'
import { useProducts } from './hook/useProducts'

import style from './App.module.scss'
import { Header } from './components/Header/Header'
import {  Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './redux/hook'
import { setIsAuth } from './redux/loginSlice/loginSlice'
import { useEffect } from 'react'
import { AddProductCart } from './components/Body/components/AddProductCart/AddProductCart'
import { setProducts } from './redux/productsSlice/productsSlice'
import { PageLoader } from './components/Loaders/PageLoader/PageLoader'



function App() {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(state=>state.loginSlice.isAuth)
  const products = useAppSelector(state=>state.productsSlice.products)
  const isUploadProducts = useAppSelector(state=>state.productsSlice.isUploadProducts)
  const isActive = useAppSelector(state=>state.modalSlice.isActiveModal)

  useEffect(()=>{
    dispatch(setIsAuth())
    dispatch(setProducts())
  },[dispatch,isUploadProducts])
  

  const { isLoading } = useProducts()

  if(!isAuth) return <Navigate to={"logIn/singIn"} />

  if(isLoading) return <PageLoader />

  return (
    <div className={style.wrapper}>
      <Header />
      <ul className={style.list_product} >        
          {products ? (products.map((item: IProduct)=>(
            <li key={item.id} >
              <ProductList product ={item} />
            </li>
          ))): null
          }
          <AddProductCart isActive={isActive} />
      </ul>

    </div>
  )
}

export default App
