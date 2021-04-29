<script lang="ts">
  export let circlesNum: number = 2;

  function rand() {
    return Math.ceil(Math.random() * 90);
  }
</script>

{#each Array(circlesNum) as num}
  <div class="circle" style="top: {rand()}%;left:{rand()}%">
    <div class="circle" style="left: 0;top:0;margin: 0;" />
  </div>
{/each}

<style>
  .circle:hover {
    transition: 0.5s;
    transform: scale(1.5);
  }
  .circle {
    position: absolute;
    top: 50%;
    margin-top: 2rem;
    width: 6rem;
    height: 6rem;
    left: 3rem;
    transition: 0.5s;
  }
  .circle {
    top: 1rem;
    right: 6rem;
  }
  .circle .circle:hover{
    transform: scale(0);
  }
</style>
