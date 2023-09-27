import { FunctionComponent } from "react";
import { IProduct } from "../../../../types/Product";

import style from './ProductList.module.scss'
import { Link } from "react-router-dom";


interface ProductCardProps {
    product: IProduct
}
 
export const ProductList: FunctionComponent<ProductCardProps> = ({product}) => {
    return ( 
    <>
    <div className={style.card}>
            <div className={style.card_product} >
            <img src={product.image} alt="product" />
    
        </div>
        <div className={style.card_infos}>
            <h3 className={style.card_title}>{product.title}</h3>
            <h2 className={style.price}>{product.price}</h2>
            <button className={style.buy} ><Link to={`products/${product.id}`}>More</Link></button>
        </div>
        
    </div> 
    </>
         
    );
}
 
