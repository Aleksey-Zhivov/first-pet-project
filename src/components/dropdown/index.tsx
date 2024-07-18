import { MouseEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { cities } from "../../someData/cities";
import { Input } from "./input";
import { DropdownList } from "./dropdown-list";
import { Label } from "./label";
import { DeleteButton } from "./delete-button";
import styles from "./dropdown.module.css";
import { useClose } from "../../utils/hooks/useClose";

export const Dropdown = () => {
  const list = document.getElementById("list"); //id - уникальное значение

  /* Начальные состояния */
  const initialInputValue = "";

  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [options, setOptions] = useState(cities);

  /* Закрытие / открытие листа */

  const handleOpen = () => setOpen(!isOpen);

  const handleOpenByOputsideClick = (e: any) => {
    if (isOpen && e.target !== list) {
      setOpen(!isOpen);
    }
  };

  const handleOpenByEscapePress = (e: KeyboardEvent) => {
    if (isOpen && e.key === "Escape") {
      setOpen(!isOpen);
    }
  };

  useEffect(() => {
    isOpen
      ? document.addEventListener("mouseup", (e) =>
          handleOpenByOputsideClick(e),
        )
      : document.removeEventListener("mouseup", (e) =>
          handleOpenByOputsideClick(e),
        );
  }, [isOpen]);

  useEffect(() => {
    isOpen
      ? document.addEventListener("keydown", (e) => handleOpenByEscapePress(e))
      : document.removeEventListener("keydown", (e) =>
          handleOpenByEscapePress(e),
        );
  }, [isOpen]);

  /* Установка значения из списка */

  const setInputText = (e: MouseEvent) => {
    const item = e.target as HTMLLIElement;
    if (item !== e.currentTarget && item) {
      setInputValue(item.outerText);
    } else if (e.target !== list) {
      setOpen(false);
    }
  };

  const handleInputFilter = (text: string) => {
    setOptions(
      options.filter((option) =>
        option.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  const handleChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    input
      ? document.addEventListener("keyup", () => {
          handleInputFilter(input.value);
        })
      : document.removeEventListener("keyup", () => {
          handleInputFilter(input);
        });
    setInputValue(input.value);
  };

  const clearInput = () => {
    setInputValue(initialInputValue);
    setOptions(cities);
  };

  useEffect(() => {
    list?.addEventListener("mouseup", (e: any) => setInputText(e));
    return list?.removeEventListener("mouseup", (e: any) => setInputText(e));
  }, [list]);

  return (
    <>
      <div className={`${styles.dropdown}`}>
        <Label title="Выберите город" />
        <div className={`${styles.input}`}>
          <Input
            value={inputValue}
            onClick={handleOpen}
            onChange={handleChange}
          />
          <DeleteButton onClick={clearInput} />
        </div>
        {options.length !== 0 ? (
          <DropdownList isOpen={isOpen} options={options} />
        ) : isOpen ? (
          <span className={`${styles.error}`}>Совпадений не найдено</span>
        ) : null}
      </div>
    </>
  );
};
