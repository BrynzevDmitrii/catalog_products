import { FunctionComponent, useEffect, useState } from "react";

import style from "./Header.module.scss";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { setIsAuth } from "../../redux/loginSlice/loginSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useGetCookie } from "../../hook/useGetCookie";
import { addProductBasket } from "../../redux/basketSlice/basketSlice";

export const Header: FunctionComponent = () => {
  const [scroll, setScroll] = useState(0);
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.loginSlice.isAuth);
  const basket = useAppSelector((state) => state.basketSlice.basketProducts);

  const {pathname} = useLocation();

  const isBascetPath = pathname.indexOf('basket')

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(setIsAuth());
    dispatch(addProductBasket());
  }, [dispatch]);

  const login = useGetCookie("login");

  const handleScroll = () => {
    setScroll(window.scrollY);
  }
  
  return (
    <div className={clsx(style.header, scroll > 10 && style.small)}>
      <h1>
        <Link className={style.header_logo} to={"/"}>
          WebComerce
        </Link>
      </h1>

      <div>
        <h3>
          {isAuth ? (
            <div className={style.header_login}>{login}</div>
          ) : (
            <Link className={style.header_login} to={"logIn/singIn"}>
              Login/Singin{" "}
            </Link>
          )}
        </h3>
        <p>
          {basket.length !== null ? (
            <div
              className={clsx(
                isBascetPath === -1 ? 'style.hidden' : style.hidden
              )}
            >
              <Link to={"basket"}>корзина товаров:{basket.length}</Link>
            </div>
          ) : null}
        </p>
      </div>
    </div>
  );
};
