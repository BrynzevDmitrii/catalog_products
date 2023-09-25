import { FunctionComponent } from "react";
import style from './Login.module.scss'
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setIsLogin } from "../../redux/loginSlice/loginSlice";
import { useForm } from "react-hook-form";
import { useToken } from "../../hook/useToken";
import {validateLogin} from "../../validations/LoginValidation";
import { yupResolver } from '@hookform/resolvers/yup';
import {  Navigate } from "react-router-dom";
import { useGetCookie } from "../../hook/useGetCookie";

interface LoginProps {
    
}
 
export const Login: FunctionComponent<LoginProps> = () => {
    const isSelect = useAppSelector((state)=>state.loginSlice.isLogin)
    const dispatch = useAppDispatch()

    const { register , handleSubmit, formState } = useForm({resolver: yupResolver(validateLogin)})

    const {errors} = formState
    

    const {mutate} = useToken()

    const handleLogin = (data: { login: string; password: string }) =>{
      mutate() 
      document.cookie=`login = ${data.login}`  
    }

    const isTolken=useGetCookie('token')

    
    if(isTolken)return<Navigate to={'/'} />

    return ( 

        <section className={clsx(style.wrapper,(isSelect&&style.active)) }>


        <div className={clsx(style.form, style.signup)}>
          <header onClick={()=>dispatch(setIsLogin())}>Signup</header>
          <form action="POST">
            <input type="text" placeholder="Full name" required />
            <input type="text" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <div className={style.checkbox}>
              <input type="checkbox" id="signupCheck" />
              <label htmlFor="signupCheck">I accept all terms & conditions</label>
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>



        <div className={clsx(style.form, style.login)}>
          <header onClick={()=>dispatch(setIsLogin())}>Login</header>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input type="text" placeholder="Login" {...register('login')} />
            <p className={style.error}>{errors.login?.message}</p>
            <input type="password" placeholder="Password" {...register('password')} />
            <p className={style.error}>{errors.password?.message}</p>
            <a href="#">Forgot password?</a>
            <input type="submit" value="Login" />
          </form>
        </div>
        </section>
  
);
}