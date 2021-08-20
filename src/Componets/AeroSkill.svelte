<script>
  import Modal from "./Modal.svelte";
  let showmodal = false;
</script>

<Modal {showmodal} skilltype="aero" on:click={() => (showmodal = !showmodal)} />
<section on:click={() => (showmodal = !showmodal)}>
  <div>
    <img
      src="https://img.icons8.com/ios/150/ffffff/paper-plane.png"
      alt="aeroplane pic"
    />
    <h1>Aerospace</h1>
    <p>An expreienced Aerospace manufacturing engineer</p>
    <p>Hads-on experience in cnc milling and Assemblies</p>
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
