import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DateComp from './DateComp';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const CharacterCard = ({ character }) => {
  const { image, status, species, gender, origin, location, name, id, created } = character;
  const theme = createTheme({
    typography: {
      fontFamily: 'Arvo',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: 345,
          margin: 'auto',
          backgroundColor: '#2e2e2e',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px'
        }}
      >
        <Box // holds image ,<Box> name,id,date</Box>
          sx={{
            position: 'relative'
          }}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{
              objectFit: 'cover',
              maxHeight: "196px",
              filter: 'brightness(0.8)',
            }}
          />
          <Box //for the name, id and year
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              textAlign: 'center',
              height: '58px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            <Typography variant="body2" component="div">
              id: {id} - <DateComp created={created} /> {/* //from DateComponent */}
            </Typography>
          </Box>
        </Box>
        {/* Card Content */}
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant="body2" color="#fff">
              Status
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ color: '#ff9800' }}>
              {status}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2" color="#fff">
              Species
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ color: '#ff9800' }}>
              {species}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2" color="#fff">
              Gender
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ color: '#ff9800' }}>
              {gender}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2" color="#fff" sx={{ mr: 3 }}>
              Origin
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ color: '#ff9800', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {origin.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2" color="#fff">
              Last Location
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ color: '#ff9800', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {location.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
export default CharacterCard;