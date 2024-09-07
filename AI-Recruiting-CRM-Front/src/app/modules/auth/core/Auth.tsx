/* eslint-disable react-refresh/only-export-components */
import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { LayoutSplashScreen } from "../../../../_metronic/layout/core";
import { AuthModel, UserModel } from "./_models";
import * as authHelper from "./AuthHelpers";
// import {getUserByToken} from './_requests' // Commented out to bypass the real request
import { WithChildren } from "../../../../_metronic/helpers";

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  logout: () => void;
};

const initAuthContextPropsState = {
  // Added simplified initialization for bypassing authentication
  auth: { api_token: "dummy_token" },
  saveAuth: () => {},
  currentUser: {
    id: 1,
    email: "demo@demo.com",
    password: "demo", // Added password field for demonstration purposes
  },
  setCurrentUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>({
    api_token: "dummy_token",
  }); // Added state for bypassing authentication
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>({
    // Added state for bypassing authentication
    id: 1,
    email: "demo@demo.com",
    password: "demo", // Added password field for demonstration purposes
  });

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit: FC<WithChildren> = ({ children }) => {
  const { auth, currentUser, logout, setCurrentUser } = useAuth();
  const [showSplashScreen, setShowSplashScreen] = useState(false); // Set to false to skip splash screen

  // Removed the useEffect for requesting user by authToken
  // useEffect(() => {
  //   const requestUser = async (apiToken: string) => {
  //     try {
  //       if (!currentUser) {
  //         const {data} = await getUserByToken(apiToken)
  //         if (data) {
  //           setCurrentUser(data)
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error)
  //       if (currentUser) {
  //         logout()
  //       }
  //     } finally {
  //       setShowSplashScreen(false)
  //     }
  //   }

  //   if (auth && auth.api_token) {
  //     requestUser(auth.api_token)
  //   } else {
  //     logout()
  //     setShowSplashScreen(false)
  //   }
  //   // eslint-disable-next-line
  // }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export { AuthProvider, AuthInit, useAuth };
