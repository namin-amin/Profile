<script lang="ts">
  import AOS from "aos"; //scroll animation library
  import "aos/dist/aos.css";
  import { onMount } from "svelte";
  import About from "./Componets/About.svelte";
  import AeroSkill from "./Componets/AeroSkill.svelte";
  import WebSkill from "./Componets/WebSkill.svelte";
  AOS.init();
  let link: string = "intro";
  let scrollposition;
  let screenlenth = window.innerHeight;
  let subtitle = "Iam an Aeronautical Engineer";

  onMount(() => {
    document.addEventListener("scroll", (eve) => {
      //event to listen to scroll event for nav button active styles
      scrollposition = window.scrollY;
    });

    setInterval(changesubtitle, 4000); //to change subtitle
  });

  //function changing subtitle
  const changesubtitle = () => {
    if (subtitle === "Iam an Aeronautical Engineer") {
      subtitle = "And a Web Developer for Fun 😉";
    } else {
      subtitle = "Iam an Aeronautical Engineer";
    }
  };

  //nav bar active styles logic
  $: if (scrollposition < screenlenth) {
    link = "intro";
  } else if (
    scrollposition >= screenlenth &&
    scrollposition < screenlenth * 2
  ) {
    link = "skills";
  } else if (scrollposition === screenlenth * 2) {
    link = "contact";
  }
</script>

<!--navbar start-->
<nav>
  <ul class="navbar">
    <li>
      <a href="#intro" class="active" class:active={link === "intro"}>Home</a>
    </li>
    <li>
      <a href="#skills" class:active-skills={link === "skills"}>Skills</a>
    </li>
    <li><a href="#contact" class:active={link === "contact"}>Contact</a></li>
  </ul>
</nav>

<!--Start of the pages-->
<main class="container">
  <!-- Introoduction page -->
  <div class="page" id="intro">
    <div
      class="content"
      data-aos="slide-down"
      data-aos-offset="200"
      data-aos-delay="70"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      style="flex-direction: column;"
    >
      <h1 class="heading">Navaneesh Amin</h1>
      <div style="display: flex;">
        <h2 class="subtitle">
          {subtitle}
        </h2>
      </div>
    </div>
  </div>

  <!--Skills page-->
  <div class="page" id="skills">
    <div
      class="content"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <AeroSkill />
      <WebSkill />
    </div>
  </div>

  <!--Contacts page-->
  <div class="page" id="contact">
    <div
      class="content"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      data-aos-id="contact-in"
    >
      <About />
    </div>
  </div>
</main>

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

  .page {
    height: 100vh;
    padding: 0 5rem 0 5rem;
  }

  .content {
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #intro {
    background-color: #f7fff7;
  }

  #skills {
    background-color: #292f36;
  }

  #contact {
    background-color: #f7fff7;
  }
  .heading {
    /* font-family: "Indie Flower", cursive; */
    font-weight: bold 800;
    font-size: 6rem;
  }

  .subtitle {
    /* font-family: "Indie Flower", cursive; */
    font-weight: 400;
    font-size: 3rem;
  }
  @media (max-width: 700px) {
    .heading {
      font-size: 3rem;
    }

    .navbar {
      display: none;
    }

    .subtitle {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 800px) {
    .content {
      flex-direction: column;
    }
  }

  @media (min-width: 850px) and (max-height: 500px) {
    .heading {
      font-size: 3rem;
      margin: 0;
    }
    .subtitle {
      font-size: 1.5rem;
      margin: 0;
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
