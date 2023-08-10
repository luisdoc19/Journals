import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView.vue", () => {
  it("should be match snapshot", () => {
    const wrapper = shallowMount(AboutView);
    const h1 = wrapper.find("h1");

    expect(h1.text()).toBe("This is an about page");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
