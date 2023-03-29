import { Container, Link } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Config from 'src/config/Config';
import { setUser, UserData } from 'src/data/UserDataSplice';
import { PATH_ROUTE } from 'src/route/routeConst';
import authService from 'src/services/auth.service';
function SignIn() {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const homePage = PATH_ROUTE.HOME.PATH;
  useEffect(() => {
    // if (Config.MODE == "DEV") {
    //   navigate(homePage)
    // }

    let ticket = searchParams.get('ticket');
    if (ticket) {
      authService.login(ticket).then(response => {
        console.log('header', response['Set-Cookie']);
        // dispatch(setUser(user))
        // localStorage.setItem("user_data", JSON.stringify(user));
        // navigate(homePage);
      }).catch(err => {

      });
    }
  }, [])
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Link href={Config.O365_URL + Config.CLIENT_HOST.url + PATH_ROUTE.SIGN_IN.PATH}>Sign in with O365</Link>

    </Container>
  );
}

export default SignIn;
