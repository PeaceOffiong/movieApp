import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MovieDetail from "@/views/MovieDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
      path: "/movie/:id",
      name: "Movie Detail",
      component: MovieDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "..views/HomePage.vue";
// import MovieDetail from "..views/MovieDetail.vue";

// const routes = [
//     {
//         path: "/",
//         name: "HomePage",
//         component: HomePage
//     },
    // {
    //     path: "/movie/:id",
    //     name: "Movie Detail",
    //     component: MovieDetail
    // }
// ]

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL), routes
// })

// export default router;