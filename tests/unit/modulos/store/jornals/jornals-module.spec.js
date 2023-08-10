import { createStore } from "vuex";
import journal from "@/modulos/daybook/store/journal/";
import { jornalState } from "../../../mock-data/test-jornal";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });

describe("Pruebas en jornal Module", () => {
  it("Este es el estado Inicial", () => {
    const store = createVuexStore(jornalState);
    const { isLoading, entries } = store.state.journal;
    expect(isLoading).toBeFalsy();
    expect(entries).toEqual(jornalState.entries);
  });
  it("mutations setEntries", () => {
    const store = createVuexStore({ isLoading: true, entries: [] });
    store.commit("journal/setEntries", jornalState.entries);

    expect(store.state.journal.entries.length).toBe(2);
    expect(store.state.journal.isLoading).toBeFalsy();
  });
  it("mutations: updateEntry", () => {
    const store = createVuexStore(jornalState);
    const text = "I edit whole component from a test";
    const editEntry = {
      id: "-Nb7MoPaZPjx5_ULLjgb",
      date: "Sat Aug 05 2023",
      picture:
        "https://res.cloudinary.com/djrggifvj/image/upload/v1691284081/pvwxc3bumtvjmnmsfdcs.png",
      text,
    };
    store.commit("journal/updateEntry", editEntry);
    const editedEntry = store.state.journal.entries.find(
      (item) => item.id === editEntry.id
    );
    expect(editedEntry.text).toBe(text);
  });

  it("mutations: addEntry", () => {
    const store = createVuexStore(jornalState);
    const id = "AJDIKAD";
    const newEntry = {
      id,
      picture: null,
      text: "Idk what to put rigth there",
      data: `${new Date().toDateString()}`,
    };
    store.commit("journal/addEntry", newEntry);
    expect(
      store.state.journal.entries.findIndex((entry) => entry.id === newEntry.id)
    ).not.toBe(-1);
  });

  it("mutations: deleteEntry", () => {
    const store = createVuexStore(jornalState);
    store.commit("journal/deleteEntry", store.state.journal.entries[0].id);
    expect(store.state.journal.entries.length).toBe(1);
  });

  it("getters: getEntriesByTerm, getEntryById", () => {
    const store = createVuexStore(jornalState);

    expect(store.getters["journal/getEntriesByTerm"]("").length).toBe(2);
    expect(store.getters["journal/getEntriesByTerm"]("Hola").length).toBe(1);

    expect(
      store.getters["journal/getEntryById"]("-Nb7Npq9WGFPI_23AXFF").id
    ).toBe("-Nb7Npq9WGFPI_23AXFF");
    expect(store.getters["journal/getEntryById"]("-adajd")).toBeUndefined();
  });

  it("actions: loadEntries", async () => {
    const store = createVuexStore({ isLoading: true, entries: [] });
    await store.dispatch("journal/loadEntries");
    expect(store.state.journal.entries.length).toBe(5);
  });

  it("actions: updateEntry", async () => {
    const store = createVuexStore({ isLoading: true, entries: [] });
    await store.dispatch("journal/loadEntries");

    const newEntry = {
      id: store.state.journal.entries[0].id,
      date: store.state.journal.entries[0].date,
      picture: store.state.journal.entries[0].picture,
      text: "Hola desde test",
    };

    await store.dispatch("journal/updateEntry", newEntry);
    expect(store.state.journal.entries[0].text).toBe("Hola desde test");
  });

  it("actions: createEntry", async () => {
    const store = createVuexStore(jornalState);
    const newEntry = {
      text: "MDAKMDMKAJDJDO DAD",
      date: `${new Date().toDateString()}`,
    };

    const id = await store.dispatch("journal/createEntry", newEntry);
    expect(typeof id).toBe("string");
    expect(store.state.journal.entries.find((e) => e.id === id)).toBeTruthy();

    await store.dispatch("journal/deleteEntry", id);
    expect(store.state.journal.entries.find((e) => e.id === id)).toBeFalsy();
  });
});
