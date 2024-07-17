import { FC } from "react";
import { TUserProps } from "./types";
import styles from "./user.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../utils/store";

export const User: FC<TUserProps> = ({ user }) => {
  const name = user.firstname + " " + user.lastname;
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${styles.user}`}
        onClick={() => navigate(`/users/${user.id}`)}
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
