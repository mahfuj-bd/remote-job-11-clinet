import { useContext } from "react";
import {AuthContext} from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loacation = useLocation()
    console.log(loacation);
    if(loading ){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={loacation.pathname}></Navigate>
};

export default PrivateRoute;