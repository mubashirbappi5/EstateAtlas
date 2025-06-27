
'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

interface IUserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
