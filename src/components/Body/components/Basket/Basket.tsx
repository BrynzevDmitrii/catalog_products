import { FunctionComponent } from "react";
import style from "./Basket.module.scss";
import clsx from "clsx";
import { Header } from "../../../Header/Header";
import { useAppSelector } from "../../../../redux/hook";

interface BascetProps {}

const Bascet: FunctionComponent<BascetProps> = () => {
    const basket = useAppSelector(state=>state.basketSlice.basketProducts)

    const subTitle = +(basket.reduce((acc,num)=>acc+(num.price*(num.quantity||1)), 0)).toFixed(2)
    const tax = +((+subTitle*0.05).toFixed(2))
    const shipping = 15
    const total = +(subTitle+tax+shipping).toFixed(2)

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.shopping_cart}>
          <div className={style.column_labels}>
            <label className={style.product_image}>Image</label>
            <label className={style.product_details}>Product</label>
            <label className={style.product_price}>Price</label>
            <label className={style.product_quantity}>Quantity</label>
            <label className={style.product_removal}>Remove</label>
            <label className={style.product_line_price}>Total</label>
          </div>
          {
                basket.map((product)=>{     
                 return   (<div key={product.id} className={style.product}>
            <div className={style.product_image}>
             <img src= {product.image} alt="prodImg"  />
            </div>
            <div className={style.product_details}>
              <div className={style.product_title}>{product.title}</div>
              <p className={style.product_description}>
                {product.description}
              </p>
            </div>
            <div className={style.product_price}>{product.price}</div>
            <div className={style.product_quantity}>
              <input type="number"  value={product.quantity} min="1" />
            </div>
            <div className={style.product_removal}>
              <button className={style.remove_product}>Remove</button>
            </div>
            <div className={style.product_line_price}>{product.price*(product.quantity||1)}</div>
          </div> )
          
          })
            }
        
            <div className={style.totals}>
            <div className={style.totals_item}>
              <label>Subtotal</label>
              <div className={style.totals_value} id="cart-subtotal">
              {subTitle}
              </div>
            </div>
            <div className={style.totals_item}>
              <label>Tax (5%)</label>
              <div className={style.totals_value} id="cart-tax">
               {tax} 
              </div>
            </div>
            <div className={style.totals_item}>
              <label>Shipping</label>
              <div className={style.totals_value} id="cart-shipping">
              {shipping}
              </div>
            </div>
            <div className={clsx(style.totals_item, style.totals_item_total)}>
              <label>Grand Total</label>
              <div className={style.totals_value} id="cart-total">
                {total}
              </div>
            </div>
          </div>

          <button className={style.checkout}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Bascet;
