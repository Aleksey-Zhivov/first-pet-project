import { FC, useEffect, useState } from "react";
import style from "./style.module.css";
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

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {visiblePages.visibleArr.map((item, index) => (
          <li
            key={index}
            className={`${style.list__item} ${
              index === visiblePages.current ? style.list__item_active : null
            }`}
            onClick={() => paginate(index)}
          >
            <a
              className={`${style.link} ${
                index === visiblePages.current ? style.link_active : null
              }`}
              onClick={() => {
                changePage(index);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
