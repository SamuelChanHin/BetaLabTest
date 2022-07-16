import React, { Dispatch, PropsWithChildren } from "react";
import { tokenValidationApi } from "../api/authApi";
import { apiClient } from "../config/apiClient";
import { User } from "../types/userType";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../util/localStoage";

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
  setUser: Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  setIsAuthenticated: () => undefined,
  logout: () => undefined,
  setUser: () => undefined,
});
export const useAuth = () => React.useContext(AuthContext);

interface AuthProviderProps {}

export const AuthProvider = ({
  children,
}: PropsWithChildren<AuthProviderProps>) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User | null>(null);

  const logout = () => {
    setIsAuthenticated(false);
    removeAccessToken();
  };

  React.useEffect(() => {
    /**
     * Handle JWT token validation
     * and set setIsAuthenticated
     */
    async function userTokenValidation() {
      try {
        if (!getAccessToken()) return;
        const res = await tokenValidationApi();
        if (res) {
          setUser(res);
          setAccessToken(res.access_token);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error(err);
      }
    }

    userTokenValidation();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
