import { FC } from "react";
import { User } from "../user";
import { useSelector } from "../../utils/store";
import { Preloader } from "../preloader";
import styles from "./users.module.css";
import clsx from "clsx";

export const Users: FC = () => {
  const users = useSelector((store) => store.users.data);

  if (!users.length) {
    return <Preloader />;
  }

  return (
    <section className={clsx(styles.users_section)}>
      <div className={clsx(styles.users_header)}>Пользователи</div>
      <div>
        {users &&
          users.map((user) => (
            <User
              user={{
                firstname: user.firstname,
                lastname: user.lastname,
                address: user.address.city,
                email: user.email,
                phone: user.phone,
                companyName: user.company.name,
              }}
              key={user._id}
            />
          ))}
      </div>
    </section>
  );
};
