import Vue from "vue";
import VueRouter from "vue-router";
import ShowBlogs from "../components/ShowBlogs.vue";
import AddBlog from "../components/AddBlog.vue";
import ListBlogs from "../components/ListBlogs.vue";
import SingleBlog from "../components/SingleBlog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ShowBlogs,
  },
  {
    path: "/add",
    component: AddBlog,
  },
  {
    path: "/list",
    component: ListBlogs,
  },
  {
    path: "/blog/:id",
    component: SingleBlog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
