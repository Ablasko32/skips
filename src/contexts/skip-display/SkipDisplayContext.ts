import { createContext, type Dispatch, type SetStateAction } from "react";

export interface ISkipDisplayContext {
  setSelectedSize: (size: string) => void;
  selectedSize: string;
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isDropDownOpen: boolean;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const SkipDisplayContext = createContext<
  ISkipDisplayContext | undefined
>(undefined);
