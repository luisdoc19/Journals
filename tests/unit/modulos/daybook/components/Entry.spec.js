import { shallowMount } from "@vue/test-utils";
import EntryComponentVue from "@/modulos/daybook/components/EntryComponent.vue";
import { jornalState } from "../../../mock-data/test-jornal";

describe("Pruebas en Entry component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = shallowMount(EntryComponentVue, {
    props: {
      data: jornalState.entries[0],
    },
    global: {
      mocks: {
        $router: mockRouter,
      },
    },
  });

  it("Debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("debe redireccionar al hacer click en el entry-component", async () => {
    const div = wrapper.find(".entry-container");
    div.trigger("click");
    expect(mockRouter.push).toHaveBeenCalled();
  });
});
