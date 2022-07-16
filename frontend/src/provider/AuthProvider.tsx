import React, { PropsWithChildren } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
}

export const AuthContext = React.createContext<AuthContextProps>({
  isAuthenticated: false,
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
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
