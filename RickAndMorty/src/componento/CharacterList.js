import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Grid, Box } from '@mui/material';
import CharacterCard from './CharacterCard';
import CharacterSearch from './CharacterSearch';
import CharacterSort from './CharacterSort';
import CharacterFilter from './CharacterFilter';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterOptions, setFilterOptions] = useState({ //44
    species: [],
    gender: [],
    origin: []
  });
  // it stores the current selected filters - like (species, gender, and origin).
  const [filters, setFilters] = useState({
    species: [],
    gender: [],
    origin: []
  });
  const url = 'https://rickandmortyapi.com/api/character'
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCharacters(response.data.results);
        // console.log(response.data.results);
        extractFilterOptions(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const extractFilterOptions = (data) => {
    //extracting the uniqueValues
    const uniqueSpecies = [...new Set(data.map(c => c.species))];
    const uniqueGender = [...new Set(data.map(c => c.gender))];
    const uniqueOrigins = [...new Set(data.map(c => c.origin.name))];
    //storing these uniqueValues as an array like this {x:[1,2]}
    setFilterOptions({ species: uniqueSpecies, gender: uniqueGender, origin: uniqueOrigins });
  };
  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };
  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };
  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);
  // for sorting the characters according to id 
  const newCharacterArray = [...characters] //shallow Copy
  const sortedCharacters = newCharacterArray.sort((a, b) => {
    return ((sortOrder === 'asc') ? a.id - b.id : b.id - a.id);
  });
  // filteredCharacters[] contains only the characters that match the searchTerm and all the ((selectedFilters) in Accordion)
  const filteredCharacters = sortedCharacters.filter(character => {
    const nameMatches = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const speciesMatches = filters.species.length === 0 || filters.species.includes(character.species);
    const genderMatches = filters.gender.length === 0 || filters.gender.includes(character.gender);
    const originMatches = filters.origin.length === 0 || filters.origin.includes(character.origin.name);
    return nameMatches && speciesMatches && genderMatches && originMatches; // initial value of all these are true
  });
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <CharacterFilter
            speciesOptions={filterOptions.species}
            genderOptions={filterOptions.gender}
            originOptions={filterOptions.origin}
            onFilterChange={handleFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Box sx={{ mb: 1 }}>
          </Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 3,
              justifyContent: 'space-between',
            }}
            >
              <CharacterSearch value={searchTerm} onChange={handleSearchChange} />
              <CharacterSort sortOrder={sortOrder} onChange={handleSortChange} />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            {filteredCharacters.map(character => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CharacterList;
