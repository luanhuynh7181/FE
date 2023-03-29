import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUserData, UserData } from 'src/data/UserDataSplice';
import { Navigate } from 'react-router';
import Config from 'src/config/Config';
const PrivateRoute = ({ redirectPath = '/', children }) => {
    if (Config.MODE == "DEV") {
        return children;
    }
    const userData: UserData = useSelector(selectUserData);
    console.log("privateroute", JSON.stringify(userData))
    if (userData.ticket == "") {
        return <Navigate to={redirectPath} replace />;
    }
    return children
}

export default PrivateRoute;