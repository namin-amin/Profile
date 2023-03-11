import Blog from "../Pages/Blog.svelte";
import Home from "../Pages/Home.svelte";


export const routes = {
    "/": Home,
    "/blog/*": Blog
};