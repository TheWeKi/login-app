import {useState} from "react";
import {authContext} from "./AuthContext";

function AuthContextProvider( { children } ) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <authContext.Provider value={ {isAuthenticated, setIsAuthenticated} }>
            { children }
        </authContext.Provider>
    )
}

export {AuthContextProvider}

