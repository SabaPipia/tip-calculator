// ContextProvider.tsx
import React, { createContext, useState, ReactNode } from "react";

export type ContextType = {
  selectedTip: number;
  setSelectedTip: React.Dispatch<React.SetStateAction<number>>;
  customTip: string;
  setCustomTip: React.Dispatch<React.SetStateAction<string>>;
  numberOfPeople: number;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>;
  totalBill: number | string;
  setTotalBill: React.Dispatch<React.SetStateAction<number | string>>;
};

export const Context = createContext<ContextType | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [selectedTip, setSelectedTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [totalBill, setTotalBill] = useState<number | string>(0.0);

  return (
    <Context.Provider
      value={{
        selectedTip,
        setSelectedTip,
        customTip,
        setCustomTip,
        numberOfPeople,
        setNumberOfPeople,
        totalBill,
        setTotalBill,
      }}
    >
      {children}
    </Context.Provider>
  );
};
