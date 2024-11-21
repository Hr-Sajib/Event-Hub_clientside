import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './AuthProvider.jsx';



const PrivateRoute = ({children}) => {
    
    const location = useLocation();

    const {user, loader} = useContext(AuthContext);

    if(loader){
        return <div className="w-full flex justify-center mt-10">Loading</div>
    }


    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state ={location.pathname}></Navigate>
    }

};

export default PrivateRoute;