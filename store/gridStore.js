import create from 'zustand';

export const useGridStore = create((set) => ({
  gridData: Array(1000).fill(''), 
  history: [],
  future: [],
  

  updateCell: (index, value) => set((state) => {
    if (index < 0 || index >= state.gridData.length) {
      console.error('Invalid cell index');
      return state;
    }
    
    const newData = [...state.gridData];
    newData[index] = value;

    return {
      gridData: newData,
      history: [...state.history, state.gridData],
      future: [], 
    };
  }),
  

  undo: () => set((state) => {
    if (state.history.length === 0) return state; 

    const previousState = state.history[state.history.length - 1];
    return {
      gridData: previousState,
      history: state.history.slice(0, -1),
      future: [state.gridData, ...state.future],
    };
  }),
  
  
  redo: () => set((state) => {
    if (state.future.length === 0) return state; 

    const nextState = state.future[0];
    return {
      gridData: nextState,
      history: [...state.history, state.gridData],
      future: state.future.slice(1),
    };
  }),
  
  searchQuery: '',
  

  setSearchQuery: (query) => set({ searchQuery: query }),
  
  
  getFilteredData: (state) => state.gridData.filter((cell) =>
    cell.toLowerCase().includes(state.searchQuery.toLowerCase())),
}));
