import { TUser, TUsersResponse, TWeather } from "./types/types";

const USER_URL = "https://jsonplaceholder.org";
const WEATHER_URL = "https://goweather.herokuapp.com/weather";

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getUsersApi = () =>
  fetch(`${USER_URL}/users`)
    .then((res) => checkResponse<TUser[]>(res))
    .then((data) => {
      if (data) {
        return data;
      }
      return Promise.reject(data);
    });

export const getWeatherApi = (city: string) =>
  fetch(`${WEATHER_URL}/${city}`)
    .then((res) => checkResponse<TWeather>(res))
    .then((data) => {
      if (data) {
        return data;
      }
      return Promise.reject(data);
    });
