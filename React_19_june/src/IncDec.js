import React, { useState } from 'react';

function IncDec() {
  const [p, setP] = useState(0);

  const handleClick = (value, op) => {
    if (op === "inc")
      setP(p + value);
    else if (op === "dec")
      setP(p - value);
  };

  return (
    <div>
      <h1>Value of p: {p}</h1>
      {/* for increment */}
      <button className='inc' onClick={() => handleClick(5, "inc")}>5</button>
      <button className='inc' onClick={() => handleClick(10, "inc")}>10</button>
      <button className='inc' onClick={() => handleClick(15, "inc")}>15</button>
      <button className='inc' onClick={() => handleClick(20, "inc")}>20</button>
      {/* for decrement */}
      <button className='dec' onClick={() => handleClick(5, "dec")}>5</button>
      <button className='dec' onClick={() => handleClick(10, "dec")}>10</button>
      <button className='dec' onClick={() => handleClick(15, "dec")}>15</button>
      <button className='dec' onClick={() => handleClick(20, "dec")}>20</button>

    </div>
  );
}

export default IncDec;
