import { FunctionComponent } from "react";
import style from "./AddProductCart.module.scss";
import { Modal } from "../Modal/Modal";
import { useAppDispatch } from "../../../../redux/hook";
import { setActiveModal } from "../../../../redux/modalSlice/modalSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductValidation } from "../../../../validations/addProductValidation";
import { ICreateProduct } from "../../../../types/Product";
import { useAddProduct } from "../../../../hook/useAddProduct";
import { setNewProduct } from "../../../../redux/productsSlice/productsSlice";
interface AddProductCartProps {
  isActive: boolean;
}

export const AddProductCart: FunctionComponent<AddProductCartProps> = (
  props: AddProductCartProps
) => {
  
  const dispatch = useAppDispatch();

  const { register , handleSubmit, formState } = useForm({defaultValues:{
    id:32,
    title:'',
    price:0,
    category:'',
    description:'',
    image: "https://via.placeholder.com/250x200"

  }, resolver: yupResolver(addProductValidation)})

  const {errors} = formState
  const { isLoading, mutate } = useAddProduct()
 

  

  function handleCreateProduct(data: ICreateProduct ) {
    mutate()
    dispatch(setNewProduct(data))
    dispatch(setActiveModal())
  }

  if(isLoading) return<h1>Loading...</h1>

  return (
    <>
      <div className={style.card}>
        <div
          className={style.card_product}
          onClick={() => dispatch(setActiveModal())}
        >
          +
        </div>
      </div>
      <Modal isActivePopup={props.isActive}>
        <div className={style.testbox}>
          <form className={style.form_container} onSubmit={handleSubmit(handleCreateProduct)} >
            <h1>Create product Form</h1>
            <div className={style.item}>
              <p>Title you product</p>
                <input className={style.input} type="text" {... register("title")} placeholder="Name product" />
                
              </div>
              <p className={style.error}>{errors.title?.message}</p>
              
            <div className={style.item}>
              <p>Price</p>
              <input className={style.input} type="number" {... register("price")}placeholder="Price product" />
              
            </div>
            <p className={style.error}>{errors.price?.message}</p>
            
            <div className={style.item}>
              <p>Category</p>
              <input className={style.input} type="text" {... register("category")} placeholder="Category product" />
              
            </div>
            <p className={style.error}>{errors.category?.message}</p>

            <div className={style.item}>
              <p>Description</p>
              <textarea {... register("description")} rows={10} />
            </div>
            
              <input className={style.upload} type="file" {... register("image")} />
    
            <div className={style.btn_block}>
              <input className={style.button} type="submit" value={"Create new product!"} />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
