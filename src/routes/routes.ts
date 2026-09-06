import BlogDetailPage from "../Pages/BlogDetailPage.svelte";
import Blog from "../Pages/Blog.svelte";
import Home from "../Pages/Home.svelte";

const routeBase = import.meta.env.BASE_URL === "/"
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");

export const routes = {
    [`${routeBase}/`]: Home,
    [`${routeBase}/blog/*`]: Blog,
    [`${routeBase}/blogdetail?`]: BlogDetailPage
};