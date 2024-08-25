import React, { useState } from 'react';

const SpreadsheetApp = () => {
  // Mock data for rows (2D array where each inner array represents a row)
  const initialData = [
    ['Name', 'Age', 'City'],
    ['Luna', 30, 'New York'],
    ['Ethan', 25, 'Los Angeles'],
    ['Maya', 28, 'Chicago'],
  ];

  const [rows, setRows] = useState(initialData);

  return (
    <div>
      <h1>Spreadsheet App</h1>
      <div>
        <button>Undo</button>
        <button>Redo</button>
        <input type="text" placeholder="Search..." />
      </div>
      <table border="1" cellPadding="10">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
      <footer>
        <p>© 2024 Spreadsheet App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SpreadsheetApp;
