<script>
  import Bars from "svelte-icons/fa/FaBars.svelte";
  import { fly } from "svelte/transition";
  let showMenu = false;
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<nav>
  {#if showMenu || screenWidth > 768}
    <ul
      transition:fly={{
        duration: 300,
        y: -100,
        delay: 0,
      }}
      class="links"
    >
      <li class="link">
        <p>Inicio</p>
      </li>
      <li class="link">
        <p>Proyectos</p>
      </li>
      <li class="link">
        <p>Contacto</p>
      </li>
    </ul>
  {/if}

  <div id="hamburger" on:click={() => (showMenu = !showMenu)}>
    <Bars />
  </div>
</nav>
<div id="showMenu" />

<style>
  nav {
    position: sticky;
    top: 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    z-index: 1;
    background-color: transparent;
  }

  #hamburger {
    display: unset;
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-right: 2rem;
    width: 25px;
    height: 25px;
    color: var(--white);
    background-color: var(--secondary);
    border-radius: 100%;
    padding: 0.5rem;
    box-shadow: 0px 0px 9px var(--secondary);
    z-index: 1;
  }
  .links {
    list-style: none;
    font-weight: 600;
    font-size: 18px;
    display: inline-flex;
    justify-content: space-around;
    padding: 0;
    width: 20rem;
  }
  .link {
    color: #f1e5e5;
    padding: 0.6rem 0.8rem;
    box-sizing: border-box;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    cursor: pointer;
  }
  .link {
    color: #f1e5e5;
    padding: 0.6rem 0.8rem;
    box-sizing: border-box;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    cursor: pointer;
    border-radius: 40px;
    transition: 0.2s;
    transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    border: 1px solid transparent;
  }
  .link p {
    margin: 0;
  }
  .link:hover {
    border: 1px solid var(--white);
    transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .link:last-child {
    background-color: var(--terciary);
  }
  @media (min-width: 769px) {
    #hamburger {
      display: none;
    }
    #showMenu {
      position: fixed;
      left: 0;
      top: 17rem;
      height: 100vh;
      width: 100vw;
    }
  }
  @media (max-width: 768px) {
    .links {
      display: flex;
      flex-direction: column;
      height: 20rem;
      text-align: center;
      width: 100%;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      padding:6rem 5rem 0 5rem ;
      justify-content:center;
      box-sizing:  border-box;
    }
  }
</style>
