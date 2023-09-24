import { FunctionComponent } from "react";
import style from './Login.module.scss'
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setIsLogin } from "../../redux/loginSlice/loginSlice";
interface LoginProps {
    
}
 
export const Login: FunctionComponent<LoginProps> = () => {
    const isSelect = useAppSelector((state)=>state.loginSlice.isLogin)
    const dispatch = useAppDispatch()
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
          <form action="POST">
            <input type="text" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot password?</a>
            <input type="submit" value="Login" />
          </form>
        </div>
        </section>
  
);
}