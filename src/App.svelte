<script>
  import OmaSyote from './OmaSyote.svelte';
  import ostokset from './ostoksetStore.js';
</script>

<main>
  <h1>Tervetuloa kauppalistaasi!</h1>
  <p>1. Kirjoita haluamasi tuote alla olevaan tekstikenttään</p>
  <p>2. Klikkaa "lisää" nappia</p>
  <p>3. Luot kätevän kauppalistan hetkessä!</p>
  <br />
  <!--importattu komponentti ja siihen tarvittava tieto-->
  <OmaSyote {...$ostokset} />
  <br />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 1000px;
    max-height: 1500px;
    margin: 0 auto;
    background-color: rgb(255, 235, 218);
  }

  h1 {
    color: #ff3e00;
    background-color: peachpuff;
    text-transform: uppercase;
    font-size: 3em;
    padding: 0.5em;
  }

  p {
    padding: 0.8em;
    color: #ff3e00;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
