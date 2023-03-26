import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';



function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
     <Button
            component={RouterLink}
            to="/dashboards/crypto"
            size="large"
            variant="contained"
          >
            Sign in with 0365
          </Button>
    </Container>
  );
}

export default Hero;
