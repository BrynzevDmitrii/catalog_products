import { FunctionComponent, useEffect, useState } from "react";

import style from './Header.module.scss'
import clsx from "clsx";
import { Link } from "react-router-dom";
import { setIsAuth } from "../../redux/loginSlice/loginSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useGetCookie } from "../../hook/useGetCookie";

 
export const Header: FunctionComponent = () => {

    const [scroll, setScroll] = useState(0);
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state=>state.loginSlice.isAuth)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
       dispatch(setIsAuth())  
    }, [dispatch]);

   const login = useGetCookie('login')

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    return ( 
    <div className={clsx(style.header, (scroll>10&&style.small))}>
        <h1 ><Link className={style.header_logo} to={"/"}>WebComerce</Link></h1>
        <h3 >{isAuth?<div className={style.header_login}>{login}</div>:<Link className={style.header_login} to={"logIn/singIn"}>Login/Singin </Link>}</h3>
      </div>

    );
}
 
