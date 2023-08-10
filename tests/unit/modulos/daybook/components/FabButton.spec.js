import { shallowMount } from "@vue/test-utils";
import FabButton from "@/modulos/daybook/components/FabButton.vue";

describe("FabButton.vue", () => {
  it("Should render a default icon", () => {
    const wrapper = shallowMount(FabButton);
    const i = wrapper.find("i");

    expect(i.classes("fa-plus")).toBeTruthy();
  });

  it("Should render a 'fa-save on props'", () => {
    const icon = "fa-save";
    const wrapper = shallowMount(FabButton, {
      props: {
        icon,
      },
    });
    const i = wrapper.find("i");
    expect(i.classes(icon)).toBeTruthy();
  });

  it("Should emit a on:click event when you clicked'", () => {
    const wrapper = shallowMount(FabButton);
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("on:click")).toBeTruthy();
  });
});
