import React, { useState } from 'react';

const Gugudan = () => {
  const [dan, setDan] = useState(2); // 기본 단을 2로 설정

  const handleDanChange = (e) => {
    setDan(Number(e.target.value));
  };

  return (
    <div>
      <h1>구구단</h1>
      <label>
        단 선택: 
        <select value={dan} onChange={handleDanChange}>
          {[...Array(9).keys()].map((num) => (
            <option key={num + 2} value={num + 2}>
              {num + 2}
            </option>
          ))}
        </select>
      </label>
      <div>
        <h2>{dan}단</h2>
        <ul>
          {[...Array(9).keys()].map((num) => (
            <li key={num}>
              {dan} x {num + 1} = {dan * (num + 1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gugudan;

// App.js

