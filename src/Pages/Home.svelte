<script lang="ts">
  import AOS from "aos"; //scroll animation library
  import "aos/dist/aos.css";
  import About from "../Componets/About.svelte";
  import AeroSkill from "../Componets/AeroSkill.svelte";
  import WebSkill from "../Componets/WebSkill.svelte";
  AOS.init();
  let subtitle = "Software Developer 🤓";

  //function changing subtitle
  const changesubtitle = () => {
    if (subtitle === "Software Developer 🤓") {
      subtitle = "And An Aero Engineer 😉";
    } else {
      subtitle = "Software Developer 🤓";
    }
  };
</script>

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
    <div class="skillhead">
      <h1 class="skillhead">Things Iam good at 💻💻🚀</h1>
    </div>
    <div
      class="skillcontent"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
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

  .skillhead {
    color: white;
    text-align: center;
  }

  .skillhead {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    margin: 0;
    font-size: 3rem;
    height: 10rem;
  }
  .skillcontent {
    text-align: center;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

    .subtitle {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 800px) {
    .content {
      flex-direction: column;
    }
    .skillcontent {
      flex-direction: column;
    }
    .skillhead {
      font-size: 1.75rem;
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
</style>
