import React from 'react';
import { useGridStore } from '../store/gridStore';  

const Toolbar = () => {
  const { undo, redo, setSearchQuery } = useGridStore(); 

  return (
    <div className="flex justify-between items-center mb-4 p-2 bg-gray-100 border-b border-gray-300">
      <div>
        <button
          onClick={undo}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition"
        >
          Undo
        </button>
        <button
          onClick={redo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Redo
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default Toolbar;
