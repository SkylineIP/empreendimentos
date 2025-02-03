'use client'


import { createContext, useContext, useState, ReactNode } from "react";

// Definição do tipo do usuário
export interface User {
  name: string;
  email: string;
}

// Definição do tipo do contexto
interface ContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Criando o contexto com um valor inicial opcional
const ContextDef = createContext<ContextType | undefined>(undefined);

// Criando o provider
export const ContextDefault = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({name: 'Fernando', email: 'fernando@example.com'});

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <ContextDef.Provider value={{ user, login, logout }}>
      {children}
    </ContextDef.Provider>
  )
};

export const useContextDefault = () => {
  return useContext(ContextDef);
};