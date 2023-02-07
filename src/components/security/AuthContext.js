import {createContext, useContext} from "react";

export const authContext = createContext({});

export const useAuthContext = () =>  useContext(authContext);

