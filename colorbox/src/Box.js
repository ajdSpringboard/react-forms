import React from "react";

const Box = (props) => {
  const { width, height, backgroundColor, removeBox } = props;

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
  };

  const handleClick = () => {
    removeBox();
  };

  return (
    <div style={style}>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default Box;