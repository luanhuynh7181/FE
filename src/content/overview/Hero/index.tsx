import { Box, Button, Container, Grid, Typography, Link } from '@mui/material';
import { useEffect } from 'react';

import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import Config from 'src/config/Config';
function Hero() {
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let ticket = location.search;
    if (ticket) {
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
