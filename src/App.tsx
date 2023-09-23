import { ProductList } from './components/Body/components/ProductList'
import { IProduct } from './types/Product'
import { useGoods } from './hook/useGoods'

import style from './App.module.scss'


function App() {
  

  const {data, isLoading} = useGoods()

  if(isLoading) return <h1>...Loading ...</h1>

  return (
    <div className={style.wrapper}>
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
