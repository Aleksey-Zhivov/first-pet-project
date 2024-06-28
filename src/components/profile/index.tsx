import { FC } from "react";
import styles from "./profile.module.css";
import { useSelector } from "../../utils/store";
import { useParams } from "react-router-dom";
import { Preloader } from "../../components/preloader";

export const Profile: FC = () => {
  const users = useSelector((store) => store.users);
  const { id } = useParams();

  const userData = users.data.find((user) => user.id === Number(id));
  const userName = `${userData?.firstname} ${userData?.lastname}`;
  const userAddress = `${userData?.address.zipcode}, ${userData?.address.suite}, ${userData?.address.city}, ${userData?.address.street}`;
  const userCoord = `Координаты: ${userData?.address.geo.lat}, ${userData?.address.geo.lng}`;

  if (!userData) {
    return <Preloader />;
  }

  return (
    <div className={`${styles.prtofile}`}>
      <h3>{userName}</h3>
      <ul className={`${styles.list}`}>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Имя</p>
          <p className={`${styles.list_item_text}`}>{userData.firstname}</p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Фамилия</p>
          <p className={`${styles.list_item_text}`}>{userData.lastname}</p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Дата рождения</p>
          <p className={`${styles.list_item_text}`}>{userData.birthDate}</p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Адрес</p>
          <p className={`${styles.list_item_text}`}>{userAddress}</p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Телефон</p>
          <p className={`${styles.list_item_text}`}>{userData.phone}</p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Электронная почта</p>
          <p className={`${styles.list_item_text}`}>{userData.email}</p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Место работы</p>
          <p className={`${styles.list_item_text}`}>{userData.company.name}</p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Вебсайт</p>
          <p className={`${styles.list_item_text}`}>{userData.website}</p>
        </li>
      </ul>
      <ul>
        Авторизационные данные
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Логин</p>
          <p className={`${styles.list_item_text}`}>
            {userData.login.username}
          </p>
        </li>
        <li className={`${styles.list_item}`}>
          <p className={`${styles.list_item_text}`}>Пароль</p>
          <p className={`${styles.list_item_text}`}>
            {userData.login.password}
          </p>
        </li>
      </ul>
    </div>
  );
};
