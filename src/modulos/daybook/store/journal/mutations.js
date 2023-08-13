export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};
export const updateEntry = (state, entry) => {
  const index = state.entries.findIndex((e) => e.id === entry.id);
  state.entries[index] = entry;
};
export const addEntry = (state, entry) => {
  state.entries = [...state.entries, entry];
};
export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((e) => e.id !== id);
};

export const clearEntries = (state) => {
  state.entries = [];
};
