import { TWeather } from "src/utils/types/types";

export type TUserProps = {
  user: {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    email: string;
    phone: string;
    companyName: string;
    weather?: TWeather;
  };
};
