import React from 'react';
import { useGridStore } from '../store/gridStore';
import './Grid.module.css';

const Grid = () => {
  const { gridData, setCellData, undo, redo, searchQuery, setSearchQuery } = useGridStore();

  const renderGrid = () => {
    return gridData.map((row, rowIndex) => (
      <div key={rowIndex} className="grid-row">
        {Array.isArray(row) ? (
          row.map((cell, colIndex) => (
            <input
              key={colIndex}
              className="grid-cell"
              value={cell.value}
              onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
              style={{ textAlign: cell.align, fontSize: cell.fontSize }}
              onBlur={() => validateCell(rowIndex, colIndex)}
            />
          ))
        ) : (
          <div>Error: Row is not an array</div>
        )}
      </div>
    ));
  };

  const handleCellChange = (e, rowIndex, colIndex) => {
    const value = e.target.value;
    setCellData(rowIndex, colIndex, value);
  };

  const validateCell = (rowIndex, colIndex) => {
    const cell = gridData[rowIndex][colIndex];
    if (colIndex === 1) {
      if (isNaN(cell.value)) {
        alert('This cell only accepts numeric values.');
        setCellData(rowIndex, colIndex, '');
      }
    }
    // Add other validation rules as needed
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="grid-container">
      <div className="toolbar">
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="grid">
        {renderGrid()}
      </div>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Grid;