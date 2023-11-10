// App.js
import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker'; // Adjust the path based on your project structure

const App = () => {
  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'cyan',
    'magenta',
    'teal',
    'indigo',
    'lime',
    'maroon',
    'navy',
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color; // Change background color
  };

  return (
    <div>
      <header style={{ backgroundColor: 'lavender', padding: '20px', textAlign: 'center' }}>
        <h1>Color Picker</h1>
      </header>
      <main style={{ textAlign: 'center', marginTop: '50px' }}>
        <ColorPicker colors={colors} onColorSelect={handleColorSelect} />
        {selectedColor && (
          <p style={{ color: selectedColor }}>
            Selected Color: {selectedColor}
          </p>
        )}
      </main>
    </div>
  );
};

export default App;


