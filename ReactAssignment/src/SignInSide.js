import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SignUpSide from './SignUpSide';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const SignInSide = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  if (showSignUp) {
    return <SignUpSide />;
  }

  const theme1 = createTheme({
    typography: {
      fontFamily: 'Ubuntu',
    },
  });

  const theme2 = createTheme({
    typography: {
      fontFamily: 'Playwrite ES',
    },
  });

  return (
    <ThemeProvider theme={theme1}>
      <Grid

        container
        component="main"
        sx={{

          height: '100vh',
          fontFamily: 'Playwrite US Modern',
          fontWeight: '700',
        }}
      >
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage:
              'url(./stars.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={7}>
          <Box
            sx={{
              my: 16,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '65%'
            }}
          >
            <Box sx={{ display: 'flex', my: 4 }}>
              <img src="star.svg" alt="Logo" style={{ width: '32px' }} />
              <Typography component="h1" variant="h4">
                MiDer
              </Typography>
            </Box>
            <Typography sx={{ textAlign: 'left' }} variant="h6">
              Sign in your account
            </Typography>
            <ThemeProvider theme={theme2}>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 1,
                  fontSize: 8,


                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 1,
                    mb: 2,
                    px: 5,
                    display: 'block',
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="#" variant="body2" onClick={handleSignUpClick}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInSide;
