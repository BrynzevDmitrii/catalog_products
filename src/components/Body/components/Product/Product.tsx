import { FunctionComponent} from "react";


import { useParams } from "react-router-dom";
import { useProduct } from "../../../../hook/useProduct";
import { Modal } from "../Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { setActiveModal } from "../../../../redux/modalSlice/modalSlice";

import style from "./Product.module.scss";
import { Header } from "../../../Header/Header";

export const Product: FunctionComponent = () => {
  const isActiveModal = useAppSelector((state)=>state.modalSlice.isActiveModal)
  const dispatch = useAppDispatch()
 
  const param = useParams<string>();
  const { data, isLoading } = useProduct(Number(param.productId));


  if (isLoading) return <h1>...Loading ...</h1>;

  return (
    <>
    <Header />
      {data ? (
        <div className={style.wrapper}>
            <div className={style.product_container}>
        <div className={style.card} onClick={()=>dispatch(setActiveModal())}>
            <img src={data.image} alt="product" />     
        </div> 
        </div>
        <div className={style.product_info}>
        <h1 className={style.title}>{data.title}</h1>
        <div className={style.decript}>{data.description}</div>
            <span className={style.price}><p>Price:</p>{data.price}$</span>
            <span className={style.count}><p>Caunt:</p>{data.rating?.count}</span>
            <span className={style.rating}><p>Rating:</p>{data.rating?.rate}</span>

            <button className={style.cart_btn}>BUY</button>
        
        </div>
        <Modal isActivePopup={isActiveModal}>
          <img src={data.image} alt="product_increased" />
          </Modal>	
        </div>
      ) : null}
    </>
  );
};
