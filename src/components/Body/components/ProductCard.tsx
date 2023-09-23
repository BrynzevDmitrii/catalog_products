import { FunctionComponent } from "react";
import { IProduct } from "../../../types/Product";

import style from './ProductCard.module.scss'


interface ProductCardProps {
    product: IProduct
}
 
export const ProductCard: FunctionComponent<ProductCardProps> = ({product}) => {
    return ( 
    
         <div className={style.card}>
            <div className={style.card_product} >
            <img src={product.image} alt="juihgui" />
    
        </div>
        <div className={style.card_infos}>
            <h3 className={style.card_title}>{product.title}</h3>
            <h2 className={style.price}>{product.price}</h2>
            <a href="#" className={style.buy}>Buy Now</a>
        </div>
        
    </div> 
    );
}
 
