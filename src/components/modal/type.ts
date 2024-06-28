import { ReactNode } from "react";

export type ModalProps = {
  title: string;
  chilren?: ReactNode;
  onClose: () => void;
  onClick: () => void;
};
