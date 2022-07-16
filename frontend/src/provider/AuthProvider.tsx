import React, { Dispatch, PropsWithChildren } from "react";
import { User } from "../types/userType";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => undefined,
});
export const useAuth = () => React.useContext(AuthContext);

interface AuthProviderProps {}

export const AuthProvider = ({
  children,
}: PropsWithChildren<AuthProviderProps>) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    /**
     * Handle JWT token validation
     * and set setIsAuthenticated
     */
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
