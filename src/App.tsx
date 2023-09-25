import { ProductList } from './components/Body/components/ProductList/ProductList'
import { IProduct } from './types/Product'
import { useProducts } from './hook/useProducts'

import style from './App.module.scss'
import { Header } from './components/Header/Header'


function App() {
  
  const {data, isLoading} = useProducts()

  if(isLoading) return <h1>...Loading ...</h1>

  return (
    <div className={style.wrapper}>
      <div>
      <Header />
      </div>
      
      <ul className={style.list_product} >        
          {data ? (data.map((item: IProduct)=>(
            <li key={item.id} >
              <ProductList product ={item} />
            </li>
          ))): null
          }
      </ul>

    </div>
  )
}



export default App
