import React, { createContext, useState, ReactNode } from "react";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterData {
  email: string;
  password: string;
  rePassword: string;
  name: string;
  gender: string;
  birthday: string;
}

export const RegisterContext = createContext<any>(null);

export const RegisterProvider: React.FC<RegisterProviderProps> = ({
  children,
}) => {
  const [registerData, setRegisterData] = useState<RegisterData>();

  return (
    <RegisterContext.Provider value={{ registerData, setRegisterData }}>
      {children}
    </RegisterContext.Provider>
  );
};
