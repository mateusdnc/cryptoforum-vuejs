import { createRouter, createWebHistory } from "vue-router";
import news from "../components/news.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "App",
			component: news,
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/login.vue"),
		},
		{
			path: "/forum",
			name: "forum",
			component: () => import("../views/forum.vue"),
		},
	],
});

export default router;
