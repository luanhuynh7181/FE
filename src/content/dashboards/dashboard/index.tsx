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

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    authService.verifyCookie().then(res => {
      //set user data here
    }).catch(err => {
      navigate(PATH_ROUTE.SIGN_IN.PATH);
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

export default Dashboard;
