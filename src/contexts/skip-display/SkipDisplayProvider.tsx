import React, { useState } from "react";
import { SkipDisplayContext } from "./SkipDisplayContext";

const SkipDisplayProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isDropDownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <SkipDisplayContext
      value={{
        selectedSize,
        setSelectedSize,
        isModalOpen,
        setModalOpen,
        isDropDownOpen,
        setDropdownOpen,
      }}
    >
      {children}
    </SkipDisplayContext>
  );
};

export default SkipDisplayProvider;
