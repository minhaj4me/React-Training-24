import React from 'react';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const CharacterSearch = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };
  const theme = createTheme({
    typography: {
      fontFamily: 'Arvo',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label="Search by name"
        variant="outlined"
        value={value}
        onChange={handleInputChange}
        size="small"
      />
    </ThemeProvider>
  );
};
export default CharacterSearch;
