import { ProductCard } from './components/Body/components/ProductCard'
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
              <ProductCard product ={item} />
            </li>
          ))): null
          }
      </ul>

    </div>
  )
}



export default App
