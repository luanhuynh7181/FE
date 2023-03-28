import { Box, Button, Container, Grid, Typography, Link } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import Config from 'src/config/Config';
import { setUser, UserData } from 'src/data/UserDataSplice';
function Hero() {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userStorage = localStorage.getItem("user_data");
    let user: UserData = { ticket: "" };
    if (userStorage) {
      console.log("login from storage")
      user = JSON.parse(userStorage)
      navigate("/dashboards")
      dispatch(setUser(user))
    }
    let ticket = location.search;
    if (ticket) {
      console.log("login from login")
      user.ticket = ticket;
      dispatch(setUser(user))
      localStorage.setItem("user_data", JSON.stringify(user));
      navigate("/dashboards");
    }
  })
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Link href={Config.O365_URL + Config.CLIENT_HOST.url + "/"}>Sign in with O365</Link>

    </Container>
  );
}

export default Hero;
