<script lang="ts">
  import { spring } from "svelte/motion";
  export let reverse: boolean = false;
  let coords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.7,
    }
  );

  const shapes = ["triangle", "semiCircle", "spring", "line"];
  // const;
  const moveShapes = (e) => {
    if (reverse) {
      coords.set({ x: -e.clientX / 40, y: -e.clientY / 40 });
    } else {
      coords.set({ x: e.clientX / 40, y: e.clientY / 40 });
    }
  };
  let topHeigth: number;
  const onScroll = () => {
    reverse
      ? coords.set({ x: topHeigth / 10, y: topHeigth / 10 })
      : coords.set({ x: -topHeigth / 10, y: -topHeigth / 10 });
  };
</script>

<svelte:window
  bind:scrollY={topHeigth}
  on:mousemove={moveShapes}
  on:scroll={onScroll}
/>
<div
  id="shapes-mask"
  class="is-loaded"
  style={reverse && "flex-direction: column-reverse;"}
>
  <div style="display: none;">
    <!-- triangle-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37.196"
      height="32.213"
      viewBox="0 0 37.196 32.213"
    >
      <symbol id="triangle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.675"
          height="22.236"
          viewBox="0 0 25.675 22.236"
        >
          <path
            fill="none"
            stroke="#f06449"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
          />
        </svg>
      </symbol></svg
    ><!-- semi circle-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.093"
      height="14.546"
      viewBox="0 0 29.093 14.546"
      ><symbol id="semiCircle"
        ><path
          fill="none"
          stroke="aqua"
          stroke-width="3"
          stroke-miterlimit="10"
          d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"
        /></symbol
      ></svg
    ><!-- spring-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.046"
      height="36.016"
      viewBox="0 0 17.046 36.016"
    >
      <symbol id="spring"
        ><path
          fill="none"
          stroke="#ff0"
          stroke-width="3"
          stroke-miterlimit="10"
          d="M9.945 34.614S1.46 31.38 1.5 23.92s11.73-4.797 11.73-4.797S3.82 16.708 4.18 8.77s12.784-7.255 12.784-7.255"
        />
      </symbol>
    </svg>
    <!-- line-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.675"
      height="22.236"
      viewBox="0 0 25.675 22.236"
      ><symbol id="line"
        ><path
          fill="none"
          stroke="#CF4981"
          stroke-width="3"
          stroke-miterlimit="10"
          d="M4.92 2.514L21.964 19.56"
        /></symbol
      ></svg
    >
  </div>
  {#each shapes as shape}
    <div id={shape} style="transform: matrix(1,0,0,1,{$coords.x},{$coords.y});">
      <svg width="50px" height="50px">
        <use xlink:href="#{shape}" />
      </svg>
    </div>
  {/each}
</div>

<style>
  .is-loaded {
    -webkit-text-size-adjust: 100%;
    font-size: 100%;
    font-family: LibreBaskerville-Regular, Palatino Linotype, Times New Roman,
      serif;
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.25s ease 0.65s;
    display: flex;
    justify-content: space-between;
    padding: 3rem;
  }
  #triangle {
    align-self: flex-end;
  }

  #semiCircle {
    justify-self: right;
    align-self: flex-start;
  }

  #spring {
    align-self: flex-end;
    justify-self: right;
  }
  #line {
    align-self: flex-end;
  }
</style>
