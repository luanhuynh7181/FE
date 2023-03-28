import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUserData, UserData } from 'src/data/UserDataSplice';
import { Navigate } from 'react-router';
const PrivateRoute = ({ redirectPath = '/', children }) => {
    const userData: UserData = useSelector(selectUserData);
    if (userData.ticket == "") {
        return <Navigate to={redirectPath} replace />;
    }
    return children
}

export default PrivateRoute;