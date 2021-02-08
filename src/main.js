import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import router from "./router";
import store from "./store";
Vue.use(VueResource);

// Global Custome Directives
Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value == "wide") {
      el.style.maxWidth = "75rem";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "35rem";
    }

    // arg, eg: v-theme:column="'wide'"
    if (binding.arg == "column") {
      el.style.backgroundColor = "#e2e2e2";
      el.style.padding = "1.25rem";
    }
  },
});

// Global Filters
Vue.filter("textUppercase", function(value) {
  return value.toUpperCase();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
