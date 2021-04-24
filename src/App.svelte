<script lang="ts">
  import Layout from "./components/Layout.svelte";
  import Index from "./pages/index.svelte";

  import "../styles/styles.css";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
    crossorigin="anonymous"
  />
  <title>Erick Arita</title>
</svelte:head>
<Layout>
  <main>
    <Index />
  </main>
</Layout>

<style>
</style>
