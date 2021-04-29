<script lang="ts">
  export let inView: boolean = false;
  export let color: string;
</script>

<div class="card" style="transition:1s ease-in;color: {inView ? color:''};">
  <div class="card__icon">
    <slot name="icon">algo</slot>
  </div>
  <div class="card__text">
    <slot name="text">algo</slot>
  </div>
</div>

<style>
  .card {
    color: var(--white);
    height: 100px;
    width: 300px;
    display: inline-flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 10px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    justify-content: flex-start;
    justify-self: center;
    z-index: 1;
    transition: 0.5s;
    position: relative;
  }

  .card__icon {
    height: 70%;
    width: 40%;
  }
  .card__text {
    font-size: 1.8em;
    font-weight: 600;
  }
  .card:first-child:hover {
    color: #ffff00;
  }
  .card:nth-child(2):hover {
    color: #00ff00;
  }
  .card:nth-child(3):hover {
    color: #ff5e00;
  }
  .card:nth-child(4):hover {
    color: #4672d1;
  }
  .card:nth-child(5):hover {
    color: #61dafb;
  }
  .card:last-child:hover {
    color: #ffca28;
  }
</style>
