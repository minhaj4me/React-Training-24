import React, { useState } from 'react';

function IncDec() {
  const [p, setP] = useState(0);

  const handleClick = (value) => {
    setP(p + value);
  };

  return (
    <div>
      <p>Value of p: {p}</p>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={() => handleClick(15)}>+15</button>
      <button onClick={() => handleClick(20)}>+20</button>
      <button onClick={() => handleClick(-5)}>-5</button>
      <button onClick={() => handleClick(-10)}>-10</button>
      <button onClick={() => handleClick(-15)}>-15</button>
      <button onClick={() => handleClick(-20)}>-20</button>
    </div>
  );
}

export default IncDec;
