import React, { FC } from "react";
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export const Header: FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <header className={styles.header}>
      <nav className={`${styles.menu}`}>
        <>
          <Link
            className={clsx(
              styles.link,
              currentLocation === "/"
                ? [styles.link_active, styles.link]
                : styles.link,
            )}
            to={"/"}
          >
            Главная
          </Link>
          <Link
            className={clsx(
              styles.link,
              currentLocation === "/users"
                ? [styles.link_active, styles.link]
                : styles.link,
            )}
            to={"/users"}
          >
            Пользователи
          </Link>
          <Link
            className={clsx(
              styles.link,
              currentLocation === "/dropdown"
                ? [styles.link_active, styles.link]
                : styles.link,
            )}
            to={"/dropdown"}
          >
            Выпадающий список
          </Link>
          <Link
            className={clsx(
              styles.link,
              currentLocation !== "/" &&
                currentLocation !== "/users" &&
                currentLocation !== "/dropdown"
                ? [styles.link_active, styles.link]
                : styles.link,
            )}
            to={"/some-link"}
          >
            ???
          </Link>
        </>
      </nav>
    </header>
  );
};
