import { FC } from "react";
import styles from "./not-found.module.css";
import { useNavigate } from "react-router-dom";

export const NotFound404: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.not_found}`}>
        <h3 className={`${styles.not_found_text}`}>
          Страница не найдена. Ошибка 404.
        </h3>
        <button
          className={`${styles.to_main_button}`}
          onClick={() => navigate("/")}
        >
          Вернуться на главную
        </button>
      </div>
    </>
  );
};
