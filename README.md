# Пет-проект

## Первая часть - реализация компонента Dropdown

Для запуска Storybook:

```
npm run storybook
```

### Функциональные требования

- При нажатии на поле ввода открывается список.
- При выборе элемента списка текст вставляется в поле ввода.
- При вводе текста в поле ввода данные в выпадающем списке фильтруются.
- При нажатии на кнопку Очистить содержимое, введенный в поле ввода текст, удаляется.
- Список должен закрываться по нажатию вне списка и по нажатию на клавишу Ecsape.

## Шаг второй. Реализация CRM-подобной страницы

Для запуска сервера:

```
npm start
```

### Функциональные требования

Макет отсутствует.

- На каждом экране должны присутствовать header и footer.
- На главной странице (Партнеры) отображается список партнеров, есть возможность сортировки и филтрации (источник - https://jsonplaceholder.org/users)
- При клике на партнера, информация о партнере открывается в модальном окне.
- Модальное окно закрывается по клику вне элемента и по нажатию на клавишу Escape.
- В профиле партнера отображается информация: 
- - ФИО,
- - компания,
- - адрес,
- - телефон,
- - электронная почта,
- - логин,
- - пароль,
- - погода в городе проживания
