import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("Should be match with snapshot", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should to be re-direct when click on button", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(HomeView, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    wrapper.find("button").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith({ name: "no-entry" });
  });
});
