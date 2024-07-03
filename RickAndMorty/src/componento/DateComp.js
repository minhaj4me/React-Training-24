import React from 'react';
const DateComp = ({ created }) => {
  const createdDate = new Date(created);
  const currentDate = new Date();
  const yearsAgo = currentDate.getFullYear() - createdDate.getFullYear();
  return (
    <span>Created {yearsAgo} years ago</span>
  );
};
export default DateComp;
