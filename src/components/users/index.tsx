import { FC, useDebugValue, useEffect, useState } from "react";
import { User } from "../user";
import { useDispatch, useSelector } from "../../utils/store";
import { Preloader } from "../preloader";
import styles from "./users.module.css";
import clsx from "clsx";
import Pagination from "../pagination/index";
import { cities } from "../../someData/cities";
import { fetchWeather } from "../../utils/slices/weatherSlice";

export const Users: FC = () => {
  const users = useSelector((store) => store.users.data);
  const [currentPage, setCurrentPage] = useState(0);
  const [amountOnPage] = useState(10);
  const pages = users.length / amountOnPage;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const end = (currentPage + 1) * amountOnPage;
  const start = end - amountOnPage;
  const slicedUsers = users.slice(start, end);

  if (!users.length) {
    return <Preloader />;
  }

  return (
    <section className={clsx(styles.users_section)}>
      <div className={clsx(styles.users_header)}>Пользователи</div>
      <div>
        {slicedUsers.map((user, index) => (
          <User
            user={{
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              address: user.address.city,
              email: user.email,
              phone: user.phone,
              companyName: user.company.name,
            }}
            key={index}
          />
        ))}
        <Pagination pages={pages} paginate={paginate} />
      </div>
    </section>
  );
};
