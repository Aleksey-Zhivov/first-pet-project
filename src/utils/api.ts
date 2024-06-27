import { TUser, TUsersResponse } from "./types/types";

const URL = "https://jsonplaceholder.org";

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getUsersApi = () =>
  fetch(`${URL}/users`)
    .then((res) => checkResponse<TUser[]>(res))
    .then((data) => {
      if (data) {
        return data;
      }
      return Promise.reject(data);
    });
