import {useAuthContext} from "./AuthContext";
import {Navigate} from "react-router-dom";

function AuthenticatedRoute( { children } ) {

    const useAuth = useAuthContext();

    console.log(useAuth.isAuthenticated)
    if(useAuth.isAuthenticated) return children
    return <Navigate to='/' />
}

export { AuthenticatedRoute };
