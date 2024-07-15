import { FC, useEffect, useState } from "react";
import styles from "./style.module.css";
import { TPagintaion } from "./types";

type TVisiblePages = {
  leftPointer: number;
  visibleArr: number[];
  current: number;
};

const Pagination: FC<TPagintaion> = ({ pages, paginate }) => {
  const [visiblePages, setVisiblePages] = useState<TVisiblePages>({
    leftPointer: 0,
    visibleArr: [],
    current: 0,
  });

  useEffect(() => {
    const temp = Array.from({ length: pages }, (_, i) => i + 1);
    setVisiblePages((prevState) => ({
      ...prevState,
      visibleArr: temp.slice(0, 6),
    }));
  }, [pages]);

  const changePage = (index: number) => {
    setVisiblePages((prevState) => ({
      ...prevState,
      current: index,
    }));
  };

  const decreaseCurrent = () => {
    setVisiblePages((prevState) => {
      const newCurrent = prevState.current - 1;
      paginate(newCurrent);
      return {
        ...prevState,
        current: newCurrent,
      };
    });
  };

  const encreaseCurrent = () => {
    setVisiblePages((prevState) => {
      const newCurrent = prevState.current + 1;
      paginate(newCurrent);
      return {
        ...prevState,
        current: newCurrent,
      };
    });
  };

  const moveLeft = () => {
    visiblePages.leftPointer === 0;
    decreaseCurrent();
  };

  const moveRight = () => {
    encreaseCurrent();
  };

  return (
    <div className={styles.container}>
      <button
        className={
          visiblePages.current === 0 ? styles.button_disabled : styles.button
        }
        onClick={moveLeft}
        disabled={visiblePages.current === 0}
      >
        назад
      </button>
      <ul className={styles.list}>
        {visiblePages.visibleArr.map((item, index) => (
          <li
            key={index}
            className={`${styles.list__item} ${
              index === visiblePages.current ? styles.list__item_active : null
            }`}
            onClick={() => paginate(index)}
          >
            <a
              onClick={() => {
                changePage(index);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={
          visiblePages.current === visiblePages.visibleArr.length - 1
            ? styles.button_disabled
            : styles.button
        }
        onClick={moveRight}
        disabled={visiblePages.current === visiblePages.visibleArr.length - 1}
      >
        вперед
      </button>
    </div>
  );
};

export default Pagination;
