import { useState } from "react";

export default function RandomColor() {
  const [randomColor, setRandomColor] = useState("");

  const handleClick = () => {
    const values = "0123456789ABCDEF";
    let hexString = "";

    for (let i = 0; i < 6; i++) {
      hexString += values[Math.floor(Math.random() * values.length)];
    }

    let hexColor = `#${hexString}`;

    setRandomColor(hexColor);
  };

  return (
    <div className="color-container" style={{ backgroundColor: randomColor }}>
      <div className="color-text">Hex Color: {randomColor}</div>
      <button className="color-click" onClick={handleClick}>
        click me!
      </button>
    </div>
  );
}
