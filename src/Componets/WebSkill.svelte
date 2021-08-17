<script>
  let showmodal = false;
  import Modal from "./Modal.svelte";
</script>

<Modal {showmodal} skilltype="dev" on:click={() => (showmodal = !showmodal)} />
<section on:click={() => (showmodal = !showmodal)}>
  <div>
    <img
      src="https://img.icons8.com/ios-glyphs/150/ffffff/laptop.png"
      alt="laptop pic"
    />
    <h1>Development</h1>
    <p>Started with DAQ Development</p>
    <p>Fluent in Web-technologies Like nodejs and React</p>
  </div>
</section>

<style>
  section {
    width: 50%;
    height: auto;
    border: solid 2px white;
    border-radius: 10px;
    margin: 5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 2rem;
    color: #f7fff7;
  }

  section:hover {
    transform: scale(1.05);
  }

  img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 500px) {
    section {
      margin: 2rem;
      height: 30%;
      width: 90%;
    }

    p {
      display: none;
    }
  }
</style>
