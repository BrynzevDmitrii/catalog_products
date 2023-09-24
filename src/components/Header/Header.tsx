import { FunctionComponent, useEffect, useState } from "react";

import style from './Header.module.scss'
import clsx from "clsx";
import { Link } from "react-router-dom";

 
export const Header: FunctionComponent = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);  
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    return ( 
    <div className={clsx(style.header, (scroll>10&&style.small))}>
        <h1 ><Link className={style.header_logo} to={"/"}>WebComerce</Link></h1>
        <h3 ><Link className={style.header_login} to={"logIn/singIn"}>Login/Singin</Link></h3>
      </div>

    );
}
 
