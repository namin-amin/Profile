<script lang="ts">
  import AOS from "aos"; //scroll animation library
  import "aos/dist/aos.css";
  import { onMount } from "svelte";
  import Router, { location, link, replace } from "svelte-spa-router";
  import { routes } from "./routes/routes";

  AOS.init();
  let navLink: string = "intro";
  let scrollposition;
  let screenlenth = window.innerHeight;
  let subtitle = "Software Developer 🤓";
  let navcolor = " background-color: #f7fff7;";

  onMount(() => {
    document.addEventListener("scroll", (eve) => {
      //event to listen to scroll event for nav button active styles
      scrollposition = window.scrollY;
    });

    setInterval(changesubtitle, 4000); //to change subtitle
  });

  //function changing subtitle
  const changesubtitle = () => {
    if (subtitle === "Software Developer 🤓") {
      subtitle = "And An Aero Engineer 😉";
    } else {
      subtitle = "Software Developer 🤓";
    }
  };

  //nav bar active styles logic
  $: if ($location.endsWith("blog/") || $location.includes("/blogdetail", 0)) {
    navLink = "blog";
    if (!$location.includes("/blogdetail", 0)) {
      navcolor = "background-color: #f7fff7;";
    } else {
      navcolor = "";
    }
  } else if (scrollposition < screenlenth) {
    navLink = "intro";
  } else if (
    scrollposition >= screenlenth &&
    scrollposition < screenlenth * 2
  ) {
    navLink = "skills";
  } else if (scrollposition === screenlenth * 2) {
    navLink = "contact";
  }

  $: if (navLink !== "blog") {
    navcolor = "";
  }
</script>

<!--navbar start-->
<nav style={navcolor}>
  <ul class="navbar">
    <li>
      <a href="#intro" class="active" class:active={navLink === "intro"}>Home</a
      >
    </li>
    <li>
      <a href="#skills" class:active-skills={navLink === "skills"}>Skills</a>
    </li>
    <li><a href="#contact" class:active={navLink === "contact"}>Contact</a></li>
    <li>
      <a href="/blog/" class:active={navLink === "blog"} use:link>Blog</a>
    </li>
  </ul>
</nav>

<body>
  <Router {routes} />
</body>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300&family=Indie+Flower&display=swap");
  :global(body, html) {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    font-family: "Heebo", sans-serif;
    color: #292f36;
    font-size: 1rem;
    font-weight: bold 400;
    box-sizing: border-box;
  }

  nav {
    width: 100vw;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 2rem;
  }

  .navbar {
    display: flex;
    margin: 0;
    height: 100%;
    padding: 5px;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 5rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: darkgray;
    transition: all 0.3s ease-in-out;
    font-weight: bold;
  }

  a:hover {
    color: cadetblue;
  }

  @media (max-width: 700px) {
    .navbar {
      display: none;
    }

    body {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .active {
    font-size: bold;
    text-decoration: underline;
    color: black;
  }

  .active-skills {
    font-size: bold;
    text-decoration: underline;
    color: white;
  }
</style>
