/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";

import App from "./App.vue";
import CounterComponent from "./components/CounterComponent.vue";

describe("test App Component", () => {
  test("should use CounterComponent in App component", () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ count: 4 });
    expect(wrapper.find(CounterComponent).exists()).toBe(true);
  });

  test("should count increase when click '+' button", () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ count: 0 });
    const addButton = wrapper
      .findAll("button")
      .filter(element => element.text() === "+");
    addButton.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });

  test("should count decrease when click '-' button", () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ count: 1 });
    const addButton = wrapper
      .findAll("button")
      .filter(element => element.text() === "-");
    addButton.trigger("click");
    expect(wrapper.vm.count).toBe(0);
  });
});
