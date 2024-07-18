import { LegacyRef, SyntheticEvent } from "react";

export type InputProps = {
  onClick: () => void;
  onChange: (e: SyntheticEvent) => void;
  value: string;
};
