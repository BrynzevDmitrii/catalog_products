
import { ReactNode } from 'react';
import style from './Modal.module.scss'
import clsx from "clsx";

import { setActiveModal } from '../../../../redux/modalSlice/modalSlice';
import { useAppDispatch } from '../../../../redux/hook';


interface ModalType {
    children: ReactNode
    isActivePopup: boolean
}

export const Modal  = (props: ModalType) => {

    const dispatch = useAppDispatch()
    return (      <div className={clsx(style.modal,( props.isActivePopup&&style.active_modal))}>		
    <div className={clsx(style.modal_wrap,  (props.isActivePopup&&style.active_modal))}>
        <div className={style.content_wrap}>
        {props.children}
        </div>	
    
    </div>	
<button  onClick={()=>dispatch(setActiveModal())}>x</button>		          		
</div> );
}
 
