import { UserAdminData } from 'src/data/ReduxSplice/UserAdminDataSplice';
import { Utility } from '../../Utils/Utility';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { PATH_ROUTE } from 'src/route/routeConst';
const PrivateRoute = ({ redirectPath = PATH_ROUTE.LOGIN.PATH, children }) => {
    const navigate = useNavigate();
    let user: UserAdminData;
    // useMemo(() => {
    //     user = Utility.getUserDataLogin();
    //     let exitToken = user.token && user.token != "";
    //     if (!exitToken) {
    //         navigate(redirectPath);
    //         return;
    //     }
    // }, [])
    return children
}

export default PrivateRoute;