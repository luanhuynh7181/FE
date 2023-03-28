import { Container, Link } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Config from 'src/config/Config';
import { setUser, UserData } from 'src/data/UserDataSplice';
import { PATH_ROUTE } from 'src/route/routeConst';
function SignIn() {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminPage = PATH_ROUTE.ADMIN.PATH;
  useEffect(() => {
    if (Config.MODE == "DEV") {
      navigate(adminPage)
    }
    const userStorage = localStorage.getItem("user_data");
    console.log("userStorage", JSON.stringify(userStorage))
    let user: UserData = { ticket: "" };
    if (userStorage) {
      console.log("login from storage")
      user = JSON.parse(userStorage)
      dispatch(setUser(user))
      navigate(adminPage)
    }
    let ticket = location.search;
    console.log("ticket ne", JSON.stringify(location))
    if (ticket) {
      console.log("login from login")
      user.ticket = ticket;

      dispatch(setUser(user))
      localStorage.setItem("user_data", JSON.stringify(user));
      navigate(adminPage);
    }
  })
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Link href={Config.O365_URL + Config.CLIENT_HOST.url + PATH_ROUTE.SIGN_IN.PATH}>Sign in with O365</Link>

    </Container>
  );
}

export default SignIn;
