import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user); 
    
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <Loading></Loading>
    }
    
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;