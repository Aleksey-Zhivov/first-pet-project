import React, { FC } from "react";
import { TUserProps } from "./types";
import styles from "./user.module.css";

export const User: FC<TUserProps> = ({ user }) => {
  const name = user.firstname + " " + user.lastname;

  return (
    <>
      <div
        className={`${styles.user}`}
        onClick={() => alert(`Здесь будет профиль пользователя ${name}`)}
      >
        <div className={`${styles.user_option}`}>{name}</div>
        <div className={`${styles.user_option}`}>{user.address}</div>
        <div className={`${styles.user_option}`}>{user.email}</div>
        <div className={`${styles.user_option}`}>{user.phone}</div>
        <div className={`${styles.user_option}`}>{user.companyName}</div>
      </div>
    </>
  );
};
