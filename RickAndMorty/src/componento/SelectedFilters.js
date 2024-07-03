import React from 'react';
import { Chip, Box } from '@mui/material';

const SelectedFilters = ({ filters, onRemoveFilter }) => {
  const handleDelete = (filterType, filterValue) => {
    onRemoveFilter(filterType, filterValue);
  };
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
      {filters.species.map(species => (
        <Chip
          key={species}
          label={species}
          onDelete={() => handleDelete('species', species)}
          sx={{ bgcolor: 'grey', color: '#fff', fontWeight: 900 }}
        />
      ))}
      {filters.gender.map(gender => (
        <Chip
          key={gender}
          label={gender}
          onDelete={() => handleDelete('gender', gender)}
          sx={{ bgcolor: 'grey', color: '#fff', fontWeight: 900 }}
        />
      ))}
      {filters.origin.map(origin => (
        <Chip
          key={origin}
          label={origin}
          onDelete={() => handleDelete('origin', origin)}
          sx={{ bgcolor: 'grey', color: '#fff', fontWeight: 900 }}
        />
      ))}
    </Box>
  );
};
export default SelectedFilters;
