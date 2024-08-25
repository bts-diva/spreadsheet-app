import React, { useState } from 'react';

const Cell = ({ index, value = 'Default Value', updateCell }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    updateCell(index, inputValue);
    setEditing(false);
  };

  const handleDoubleClick = () => {
    setEditing(true);
  };

  return (
    <div
      className="border border-gray-300 p-2 text-sm"
      onDoubleClick={handleDoubleClick}
    >
      {editing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full h-full border-none outline-none"
        />
      ) : (
        <span>{inputValue}</span>  
      )}
    </div>
  );
};

export default Cell;
