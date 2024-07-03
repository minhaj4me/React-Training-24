import { useState, useEffect } from 'react';
import axios from 'axios'
import React from 'react'
import SignUpSide from './SignUpSide';
export default function AxiosCountry() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map((country) => { return country.name.common });
        setCountries(countryNames);
      } catch (error) {
        console.error('Error fetching country names:', error);
      }
    };
    fetchCountries();
  }, []);
  return (
    <SignUpSide countries={countries} />
  )
}
