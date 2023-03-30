import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import authService from 'src/services/auth.service';
import { useNavigate } from 'react-router';
import { PATH_ROUTE } from 'src/route/routeConst';

import axios from "axios";

function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Home", "useEffect Once")
        authService.verifyCookie().then(res => {
            //set user data here
            console.log("dashboard", "vertify success");
        }).catch(err => {
            console.log("dashboard", "vertify fail => login");
            navigate(PATH_ROUTE.LOGIN.PATH);
            return;
        })
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
