import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
