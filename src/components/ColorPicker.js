// ColorPicker.js
import React, { useState } from 'react';

const ColorPicker = ({ colors, onColorSelect }) => {
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    onColorSelect(color);
    setShowColorList(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handleButtonClick} style={{ margin: '20px' }}>
        Pick a color
      </button>
      {showColorList && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: color,
                margin: '5px',
                cursor: 'pointer',
                display: 'inline-block',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;


