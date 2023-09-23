/* eslint-disable no-mixed-spaces-and-tabs */
import { FunctionComponent } from "react";

import style from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../../hook/useProduct";

export const Product: FunctionComponent = () => {
  const param = useParams();
  const { data, isLoading } = useProduct(Number(param.productId));
  console.log(data);

  if (isLoading) return <h1>...Loading ...</h1>;

  return (
    <>
      {data ? (
        <div className={style.wrapper}>
            <div className={style.product_container}>
        <div className={style.card}>
            <img src={data.image} alt="product" />     
        </div> 
        </div>
        <div className={style.product_info}>
        <h1 className={style.title}>{data.title}</h1>
        <div className={style.decript}>{data.description}</div>
            <span className={style.price}><p>Price:</p>{data.price}$</span>
            <span className={style.count}><p>Caunt:</p>{data.rating.count}</span>
            <span className={style.rating}><p>Rating:</p>{data.rating.rate}</span>

            <button className={style.cart_btn}>BUY</button>
        
        </div>
        <div className={style.modal}>		
	      	<div className={style.modal_wrap}>	
				<img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" />	
	      		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>	          		
	      	</div>			          		
      	</div>	
        </div>
      ) : null}
    </>
  );
};
