import { FC, ReactNode, createContext, useContext, useState } from "react";

interface AppContextType {
  name: string;
  lastName: string;
  homeTown: string;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setHomeTown: (homeTown: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [homeTown, setHomeTown] = useState("");

  return (
    <AppContext.Provider
      value={{ name, lastName, homeTown, setName, setLastName, setHomeTown }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export default AppProvider;
