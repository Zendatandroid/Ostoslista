<script>
  import Button from './Button.svelte';
  import ostokset from './ostoksetStore.js';
  import { onDestroy } from 'svelte';
  import { scale, fade } from 'svelte/transition';

  let ostos;
  const unsub = () => ostokset.subscribe((x) => (ostos = x));
  onDestroy(() => {
    if (unsub) {
      unsub();
    }
  });

  //Buttoneille informaatiota
  //En saanut toimimaan niin, että Storessa olisi tyhjä taulukko, johon työnnetään inputista tietoa, joten nyt työnnetään taulukkoon tieto ja taulukko asetetaan Storeen
  //myöskään tavaroita.update ei toiminut jostain syystä.
  let tuote = '';
  let tavaroita = [];
  const lisaaTuote = () => {
    tavaroita.push(tuote);
    ostokset.set({ ostoslista: [...tavaroita] });
    //tyhjennetään tekstikenttä ja poistetaan virhetapahtuman teksti
    tuote = '';
    virhe = false;
  };
  //tyhjennetään sekä taulukko että Storessa oleva objekti
  const tyhjennaLista = () => {
    tavaroita = [];
    ostokset.set({});
  };

  //validointia ja virhetekstiä
  const onkoValidiKentta = (teksti) => teksti.trim().length > 0;
  $: validiKentta = onkoValidiKentta(tuote);
  $: virhe = false;
  const virheTapahtuma = () => {
    virhe = true;
    virhe = virhe;
  };
</script>

<main>
  <!--virheilmoitus jos tekstikentästä poistutaan kirjoittamatta mitään-->
  {#if virhe && !validiKentta}
    <p class="virhe">Ei tyhjyyttä voi ostaa :D</p>
  {/if}
  <input
    type="text"
    placeholder="Kirjoita tuote tähän"
    bind:value={tuote}
    on:blur={virheTapahtuma}
    class:tyhja={!validiKentta}
  />
  <!--Nappi ei toimi jos kenttä ei ole validi-->
  <br />
  <Button on:click={lisaaTuote} disabled={!validiKentta}>Lisää tuote listaan</Button>
  <br />
  <Button on:click={tyhjennaLista}>Tyhjennä ostoslista</Button>
  <br />
  <br />
  <!--listataan ostokset animaatioiden ja kierrosten kera, sekä vaihtoehto tilanteellee, jossa tekstiä ei ole syötetty-->
  {#if tavaroita.length > 0}
    {#each $ostokset.ostoslista as tavara, i}
      <div class="teksti" in:scale out:fade><b>Tuote {i + 1}:</b> {tavara.toUpperCase()}</div>
    {/each}
  {:else}
    <p class="teksti" in:scale out:fade>Ostoslistalla ei ole vielä tuotteita ;)</p>
  {/if}
</main>

<style>
  main {
    max-width: 750px;
    background-color: rgba(209, 194, 181, 0.589);
    border: 2px solid peachpuff;
    padding: 1em;
    margin: 0 auto;
  }

  .teksti {
    color: #ffffff;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  }

  .tyhja {
    border: 2px solid orangered;
  }

  .virhe {
    color: red;
  }
</style>
