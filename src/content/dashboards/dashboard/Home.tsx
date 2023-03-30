import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { useNavigate } from 'react-router';
import { PATH_ROUTE } from 'src/route/routeConst';
import { UserDataLogin } from 'src/data/UserDataSplice';
import { Utility } from 'src/Utils';
import { useMemo } from 'react';

function Home() {
    const navigate = useNavigate();
    let user: UserDataLogin;
    useMemo(() => {
        user = Utility.getUserDataLogin();
        let exitToken = user.token && user.token != "";
        if (!exitToken) {
            navigate(PATH_ROUTE.LOGIN.PATH);
            return;
        }
    }, [])
    return (
        <>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
        </>
    );
}

export default Home;
