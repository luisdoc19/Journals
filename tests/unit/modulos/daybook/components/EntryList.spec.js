import { createStore } from "vuex";
import EntryListVue from "@/modulos/daybook/components/EntryList.vue";
import { shallowMount } from "@vue/test-utils";

import journal from "@/modulos/daybook/store/journal";
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

describe("Pruebas en el EntryList", () => {
  const store = createVuexStore(jornalState);
  const mockRouter = {
    push: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallowMount(EntryListVue, {
      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    });
  });

  it("debe llamar el getEntriesByTerm sin termino y mostrar 2 entradas", () => {
    expect(wrapper.findAll("entry-stub").length).toBe(2);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("debe de llamar getEntriesByTerm y filtrar resultados", async () => {
    const input = wrapper.find("input");
    await input.setValue("Mundo");

    expect(wrapper.findAll("entry-stub").length).toBe(1);
  });

  it("el boton de nuevo debe redireccionar a new", async () => {
    const btn = wrapper.find("button");
    await btn.trigger("click");
    expect(mockRouter.push).toHaveBeenCalled();
  });
});
