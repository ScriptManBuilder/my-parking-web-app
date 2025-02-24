import React, { useState } from 'react';
import './mainPage.css'; // Подключаем стили

function MainPage() {
  const [colors, setColors] = useState(Array(10).fill('gray'));

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = newColors[index] === 'gray' ? 'blue' : 'gray';
    setColors(newColors);
  };

  return (
    <div className="container">
      <h1>Welcome to the Home Page!</h1>
      <p>You have successfully logged in.</p>

      <div className="grid">
        {colors.map((color, index) => (
          <div
            key={index}
            className="square"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
