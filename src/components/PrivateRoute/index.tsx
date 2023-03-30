import React, { useState } from 'react';
import { selectUserData, UserDataLogin } from 'src/data/UserDataSplice';
import { Navigate } from 'react-router';
import Config from 'src/config/Config';
import { Utility } from '../../Utils/Utility';
const PrivateRoute = ({ redirectPath = '/', children }) => {
    if (Config.MODE == "DEV") {
        return children;
    }
    const userData: UserDataLogin = Utility.getUserDataLogin();
    if (userData.ticket == "") {
        return <Navigate to={redirectPath} replace />;
    }
    return children
}

export default PrivateRoute;