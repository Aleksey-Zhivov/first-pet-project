import { ReactNode } from "react";

export type TPagintaion = {
  pages: number;
  paginate: (count: number) => void;
};
