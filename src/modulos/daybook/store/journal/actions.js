import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  if (!data) {
    commit("setEntries", []);
    return;
  }

  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};
export const updateEntry = async ({ commit }, entry) => {
  const { id, date, picture, text } = entry;
  const updatedEntry = {
    date,
    picture,
    text,
  };
  const { data } = await journalApi.put(`/entries/${id}.json`, updatedEntry);
  commit("updateEntry", { id, ...data });
};
export const createEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry;
  const newEntry = {
    date,
    text,
    picture,
  };
  const { data } = await journalApi.post(`/entries.json`, newEntry);
  newEntry.id = data.name;
  commit("addEntry", newEntry);
  return newEntry.id;
};
export const deleteEntry = async ({ commit }, id) => {
  try {
    await journalApi.delete(`/entries/${id}.json`);
    commit("deleteEntry", id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
