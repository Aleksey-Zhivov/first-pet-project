  import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { fetchUsers } from '../../utils/slices/usersSlice';
import { useEffect } from 'react';
import { useDispatch } from '../../utils/store';
import styles from './app.module.css'
import { Header } from '../header';
import { Users } from '../users';
import clsx from 'clsx';
  
  const AppRouter = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, []);
  
    return (
      <>
        <Routes>
          <Route path='/users' element={<Users />} />
          {/* <Route path='*' element={<NotFound404 />} /> */}
        </Routes>
      </>
    );
  };
  
  export const App = () => (
    <BrowserRouter>
      <div className={clsx(styles.app)}>
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
  
  export default App;
  