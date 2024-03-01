import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import matches from "../views/matches.vue";
import news from "../views/news.vue";
import Neww from "../views/new.vue";
import leagues from "../views/leagues.vue";
import clup from "../views/clup.vue";
import announce from "../views/announce.vue";
import policy from "../views/policy.vue";
import match from "../views/match.vue";
import multimedia from "../views/multimedia.vue";
import newsVideos from "../views/newsVideos.vue";
import newsMatches from "../views/newsMatches.vue";
import videoMatch from "../views/videoMatch.vue";
import videoNew from "../views/videoNew.vue";
import league from "../views/league.vue";
import teams from "../views/teams.vue";
import stat from "../views/stat.vue";
import contact from "../views/contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/matches",
      name: "matches",
      component: matches,
    },
    {
      path: "/news",
      name: "news",
      component: news,
    },
    {
      path: "/announce",
      name: "announce",
      component: announce,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "/stat",
      name: "stat",
      component: stat,
    },
    {
      path: "/teams",
      name: "teams",
      component: teams,
    },
    {
      path: "/league",
      name: "league",
      component: league,
    },
    {
      path: "/policy",
      name: "policy",
      component: policy,
    },
    {
      path: "/newsMatches",
      name: "newsMatches",
      component: newsMatches,
    },
    {
      path: "/newsVideos",
      name: "newsVideos",
      component: newsVideos,
    },
    {
      path: "/videoNew",
      name: "videoNew",
      component: videoNew,
    },
    {
      path: "/videoMatch",
      name: "videoMatch",
      component: videoMatch,
    },
    {
      path: "/new/:id",
      name: "new",
      component: Neww,
      props: true,
    },
    {
      path: "/clup/:id",
      name: "clup",
      component: clup,
      props: true,
    },
    {
      path: "/leagues",
      name: "leagues",
      component: leagues,
    },
    {
      path: "/match",
      name: "match",
      component: match,
    },
    {
      path: "/multimedia",
      name: "multimedia",
      component: multimedia,
    },
  ],
});

export default router;
