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
    <p>Feel like home with .NET</p>
  </div>
</section>

<style>
  section {
    width: 50%;
    height: 18rem;
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

  @media (max-width: 900px) {
    section {
      margin: 2rem;
      height: 30%;
      width: 90%;
    }

    p:last-child {
      display: none;
    }
  }

  @media (max-width: 525px) {
    p {
      display: none;
    }
  }
</style>
