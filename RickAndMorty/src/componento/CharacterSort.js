import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const CharacterSort = (props) => {
  const { sortOrder, onChange } = props
  const handleSortChange = (event) => {
    onChange(event.target.value);
  };
  const theme = createTheme({
    typography: {
      fontFamily: 'Arvo',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Select
        value={sortOrder}
        onChange={handleSortChange}
        variant="outlined"
        size="small"
      >
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
    </ThemeProvider>
  );
};
export default CharacterSort;
