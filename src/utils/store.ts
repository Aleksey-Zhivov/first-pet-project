// import { create } from 'zustand';
// import { TUser } from './types';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import {
	TypedUseSelectorHook,
	useDispatch as dispatchHook,
	useSelector as selectorHook
  } from 'react-redux';

// const usersStore = create<TUser>((set) => ({
// 	id: null,
// 	firstname: '',
// 	lastname: '',
// 	email: '',
// 	birthDate: '',
// 	login: {
// 		uuid: '',
// 		username: '',
// 		password: '',
// 		registered: '',
// 	},
// 	address: {
// 		street: '',
// 		suite: '',
// 		city: '',
// 		zipcode: '',
// 		geo: {
// 			lat: '',
// 			lng: '',
// 		},
// 	},
// 	phone: '',
// 	website: '',
// 	company: {
// 		name: '',
// 		catchPhrase: '',
// 		bs: '',
// 	},
// 	updateFirstName: (firstname: string) => set(() => ({ firstname: firstname })),
// }));

// export default usersStore;

export const rootReducer = combineReducers({
	users: usersReducer,
})

export const store = configureStore({
	reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
