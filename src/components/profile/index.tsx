import { FC, useEffect } from "react";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "../../utils/store";
import { useParams } from "react-router-dom";
import { Preloader } from "../../components/preloader";
import { fetchWeather } from "../../utils/slices/weatherSlice";

export const Profile: FC = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    users.data.forEach((user) => {
      if (user.id.toString() === id) {
        dispatch(fetchWeather(user.address.city));
      }
    });
  }, [id, users]);

  const weather = useSelector((store) => store.weather.data);

  const userData = users.data.find((user) => user.id === Number(id));
  const userName = `${userData?.firstname} ${userData?.lastname}`;
  const userAddress = `${userData?.address.zipcode}, ${userData?.address.suite}, ${userData?.address.city}, ${userData?.address.street}`;

  if (!userData) {
    return <Preloader />;
  }

  return (
    <>
      <h3 className={`${styles.title}`}>{userName}</h3>
      <div className={`${styles.profile}`}>
        <div>
          <div className={`${styles.user_data}`}>
            <ul className={`${styles.profile__list}`}>
              <li className={`${styles.list_item}`}>
                <p className={`${styles.list_item_text}`}>Имя</p>
                <p className={`${styles.list_item_text}`}>
                  {userData.firstname}
                </p>
              </li>
              <li className={`${styles.list_item}`}>
                <p className={`${styles.list_item_text}`}>Фамилия</p>
                <p className={`${styles.list_item_text}`}>
                  {userData.lastname}
                </p>
              </li>
              <li className={`${styles.list_item}`}>
                <p className={`${styles.list_item_text}`}>Дата рождения</p>
                <p className={`${styles.list_item_text}`}>
                  {userData.birthDate}
                </p>
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
                <p className={`${styles.list_item_text}`}>
                  {userData.company.name}
                </p>
              </li>
              <li className={`${styles.list_item}`}>
                <p className={`${styles.list_item_text}`}>Вебсайт</p>
                <p className={`${styles.list_item_text}`}>{userData.website}</p>
              </li>
            </ul>
            <ul className={`${styles.profile__list}`}>
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
        </div>
        <div className={`${styles.weather}`}>
          {weather.description ? (
            <ul className={`${styles.profile__list}`}>
              <li className={`${styles.list_item}`}>
                <p className={`${styles.weather_text}`}>
                  {weather?.description}
                </p>
              </li>
              <li className={`${styles.list_item}`}>
                <p className={`${styles.weather_text}`}>Temperature</p>
                <p className={`${styles.weather_text}`}>
                  {weather?.temperature}
                </p>
              </li>
              <li className={`${styles.list_item}`}>
                <p className={`${styles.weather_text}`}>Wind</p>
                <p className={`${styles.weather_text}`}>{weather?.wind}</p>
              </li>
            </ul>
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </>
  );
};
