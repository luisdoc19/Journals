import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";
import EntryViewVue from "@/modulos/daybook/views/EntryView.vue";
import journal from "@/modulos/daybook/store/journal";
import { jornalState } from "../../../mock-data/test-jornal";
import Swal from "sweetalert2";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
  showLoading: jest.fn(),
  close: jest.fn(),
}));

describe("EntryView", () => {
  const store = createVuexStore(jornalState);
  store.dispatch = jest.fn();
  const mockRouter = {
    push: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallowMount(EntryViewVue, {
      props: {
        id: "-Nb7MoPaZPjx5_ULLjgb",
      },
      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    });
  });
  it("debe de sacar al usuario porque el id no existe", () => {
    const wrapper = shallowMount(EntryViewVue, {
      props: {
        id: "Este id no existe en el Store",
      },
      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    });
    console.log(wrapper.html());
    expect(mockRouter.push).toHaveBeenCalled();
  });

  it("debe de mostrar la entrada correcta", () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it("debe de borrar la entrada y salir", (done) => {
    Swal.fire.mockReturnValueOnce(Promise.resolve({ isConfirmed: true }));
    wrapper.find(".btn-danger").trigger("click");
    expect(Swal.fire).toHaveBeenCalled();
    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        "journal/deleteEntry",
        "-Nb7MoPaZPjx5_ULLjgb"
      );
      expect(mockRouter.push).toHaveBeenCalled();
      done();
    }, 1);
  });
});
