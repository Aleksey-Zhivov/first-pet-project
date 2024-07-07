import { FC, useState } from "react";
import { User } from "../user";
import { useSelector } from "../../utils/store";
import { Preloader } from "../preloader";
import styles from "./users.module.css";
import clsx from "clsx";
import Pagination from "../pagination/index";

export const Users: FC = () => {
  const users = useSelector((store) => store.users.data);
  const weather = useSelector((store) => store.weather);
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
        {slicedUsers.map((user) => (
          <User
            user={{
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              address: user.address.city,
              email: user.email,
              phone: user.phone,
              companyName: user.company.name,
              weather: weather.data,
            }}
            key={user.id}
          />
        ))}
        <Pagination pages={pages} paginate={paginate} />
      </div>
    </section>
  );
};
