import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import JobView from "../views/JobView.vue";
import JobsView from "../views/JobsView.vue";
import AddJobView from "../views/AddJobView.vue";
import EditJobView from "../views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobsView,
    },
    {
      path: "/job/:id",
      name: "Job",
      component: JobView,
    },
    {
      path: "/add-job",
      name: "Add Job",
      component: AddJobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "Edit Job",
      component: EditJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
