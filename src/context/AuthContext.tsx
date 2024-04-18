import { PropsWithChildren, createContext, useState } from "react";
import type { User } from "../types";

type AuthContextType = {
  user: User | null;
  handleUser: (user: User | null) => void;
  resetUser: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  handleUser: () => {},
  resetUser: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const userStorage = localStorage.getItem("user");
  const userInt = JSON.parse(userStorage as string) ?? null;
  const [user, setUser] = useState<User | null>(userInt);
  const handleUser = (user: User | null) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify({ ...user }));
  };

  const resetUser = async () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, handleUser, resetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
