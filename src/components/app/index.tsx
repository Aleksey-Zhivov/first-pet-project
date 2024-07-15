import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchUsers } from "../../utils/slices/usersSlice";
import { useEffect } from "react";
import { useDispatch } from "../../utils/store";
import styles from "./app.module.css";
import { Header } from "../header";
import { Users } from "../users";
import { Dropdown } from "../dropdown";
import { NotFound404 } from "../not-found";
import { MainPage } from "../main-page";
import { Profile } from "../profile/index";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};

export const App = () => (
  <BrowserRouter>
    <div className={`${styles.app}`}>
      <Header />
      <AppRouter />
    </div>
  </BrowserRouter>
);

export default App;
