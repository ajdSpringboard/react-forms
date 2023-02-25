import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  const removeBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  };

  const renderBoxes = () => {
    return boxes.map((box, index) => (
      <Box
        key={index}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        removeBox={() => removeBox(index)}
      />
    ));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};

export default BoxList;