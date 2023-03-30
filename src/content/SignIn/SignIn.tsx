import { Container, Link } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Config from 'src/config/Config';
import { setUserDataLogin, UserDataLogin, initialState } from 'src/data/UserDataSplice';
import { PATH_ROUTE } from 'src/route/routeConst';
import authService from 'src/services/auth.service';
import { UserData, UserDataKey } from 'src/UserData';
import './styles.css';
const styles = {
  heroContainer: {
    backgroundImage: `url(${"/static/images/background/bg-01.jpg"})`,
  }
};
function SignIn() {
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
        let user: UserDataLogin = { ...initialState, ...response, ticket };
        dispatch(setUserDataLogin(user))
        UserData.setObject(UserDataKey.USER_DATA_LOGIN, user);
        navigate(homePage);
        return;
      }).catch(err => {
        console.log("login fail", err);
      });
    }
  }, [])
  return (
    <div className="limiter">
      <div className="container-login100" style={styles.heroContainer}>
        <div className="wrap-login100 p-t-30 p-b-50">

          <form className="login100-form validate-form p-b-33 p-t-5">

            <div className="wrap-input100 validate-input" data-validate="Enter username">
              <input className="input100" type="text" name="username" placeholder="Enter User name" />
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <input className="input100" type="password" name="pass" placeholder="Enter Password" />
            </div>

            <div className="container-login100-form-btn m-t-32">
              <button className="login100-form-btn" onClick={() => { alert("Username or password incorrect") }}>
                Login
              </button>

              <Link className="login100-form-title p-b-41" href={Config.O365_URL + Config.CLIENT_HOST.url + PATH_ROUTE.LOGIN.PATH}>Sign in with O365</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
    //  <Link href={Config.O365_URL + Config.CLIENT_HOST.url + PATH_ROUTE.LOGIN.PATH}>Sign in with O365</Link>
  );
}

export default SignIn;
