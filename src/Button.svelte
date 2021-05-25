<script>
  export let disabled = false;
</script>

<button {disabled} on:click><slot /></button>

<style>
  button {
    background-color: #ff3e00;
    box-shadow: 3px 3px 5px #886767;
    padding: 0.5em 2em;
    border: 1px solid #888888;
    color: black;
  }

  button:hover {
    border: 1px solid white;
    box-shadow: 2px 2px 3px #cccccc;
  }

  button:disabled {
    background-color: #ccc;
  }
</style>
