<script lang="ts">
  import Card from "../CardSkill.svelte";
  import JsIcon from "svelte-icons/fa/FaJs.svelte";
  import Node from "svelte-icons/fa/FaNodeJs.svelte";
  import Html from "svelte-icons/fa/FaHtml5.svelte";
  import Css from "svelte-icons/fa/FaCss3.svelte";
  import React from "svelte-icons/fa/FaReact.svelte";
  import Firebase from "svelte-icons/di/DiFirebase.svelte";
  import Circle from "../Circle/circle.svelte";
  import { useObserver } from "../../hooks/useObserber";

  let inView: boolean = false;
  const setInView = (e: IntersectionObserverEntry) => {
   inView = e.isIntersecting;
  };

  useObserver("#skills", { threshold: 0.6 }, setInView);
  const skills = [
    {
      Icon: JsIcon,
      text: "JavaScript",
      color: " #ffff00",
    },
    {
      Icon: Node,
      text: "NodeJs",
      color: " #00ff00",
    },
    {
      Icon: Html,
      text: "Html",
      color: " #ff5e00",
    },
    {
      Icon: Css,
      text: "Css",
      color: " #4672d1",
    },
    {
      Icon: React,
      text: "ReactJs",
      color: "#61dafb",
    },
    {
      Icon: Firebase,
      text: "Firebase",
      color: "#ffca28",
    },
  ];
</script>

<section id="skills">
  <h2><span>{"<"} </span> Skills <span>></span></h2>
  <div class="cards">
    {#each skills as { Icon, text, color }}
      <Card {color} {inView}>
        <svelte:fragment slot="icon">
          <Icon />
        </svelte:fragment>
        <p slot="text">{text}</p>
      </Card>
    {/each}
  </div>

  <h2 style="justify-self: flex-end;">
    <span>{"<"} </span> Skills <span>/></span>
  </h2>
  <Circle circlesNum={6} />
</section>

<style>
  section {
    color: rgba(255, 255, 0, 0.9);
    min-height: 100vh;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  h2 {
    color: var(--grey);
    font-size: 30px;
    margin-left: 4%;
    align-self: flex-start;
  }
  span {
    color: rgba(160, 28, 201, 0.9);
  }
  .cards {
    align-self: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    grid-gap: 1rem;
    width: 90%;
  }
</style>
