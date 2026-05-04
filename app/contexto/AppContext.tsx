"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  nombre: string;
  setNombre: (nombre: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [nombre, setNombre] = useState("Daniel");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}