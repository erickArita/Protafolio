<script>
  import Linke from "svelte-icons/fa/FaLinkedin.svelte";
  import Github from "svelte-icons/fa/FaGithub.svelte";
  import Hand from "svelte-icons/io/IoMdHand.svelte";
  const src = "me.png";
  let height;
</script>

<svelte:window  bind:innerHeight={height} />
<header style={`height: ${height}px;`} >
  <div class="circle--fly left" />
  <div class="circle circle--center">
    <img {src} alt="Foto de Erick Arita" />
    <div class="img--filter" />
  </div>
  <div class="circle--fly right" />
  <div class="text">
    <span class="text__hand">
      <Hand />
    </span>
    <div>
      <h2>Hola, soy</h2>
      <h3>Erick Arita</h3>
      <p>Desarrollador Frontend</p>
    </div>
  </div>
  <div class="social">
    <a target="__blank" href="https://www.linkedin.com/in/erickarita/"
      ><Linke /></a
    >
    <a target="__blank" href="https://github.com/erickArita"><Github /> </a>
  </div>
</header>

<style>
  header {
    height: 100vh;
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    top: 0;
    position: absolute;
    overflow-y: hidden;
  }
  .circle,
  .circle--fly {
    align-self: center;
    width: 30rem;
    height: 30rem;
    background: radial-gradient(
        ellipse at left,
        hsla(193, 51%, 54%, 0.2),
        transparent
      ),
      radial-gradient(ellipse at right, rgba(160, 28, 201, 0.2), transparent);
    border-radius: 100%;
    z-index: 0;
  }
  .circle {
    clip-path: circle(50%);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 500px;
    width: 500px;
    position: absolute;
    mask-image: radial-gradient(
        ellipse at left,
        hsla(193, 51%, 54%, 0.2),
        transparent
      ),
      radial-gradient(ellipse at right, rgba(160, 28, 201, 0.2), transparent);
  }
  .img--filter {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(160, 28, 201, 0.2),
      hsla(193, 51%, 54%, 0.2)
    );
    z-index: 1;
  }
  .circle--fly {
    position: absolute;
  }
  .left {
    left: -15rem;
    top: -15rem;
    background: radial-gradient(
      ellipse at center,
      rgba(27, 178, 219, 0.449),
      transparent 70%
    );
  }
  .right {
    right: -15rem;
    bottom: -15rem;
    background: radial-gradient(
      ellipse at center,
      hsla(293, 51%, 54%, 0.424),
      transparent 70%
    );
  }

  .text {
    position: absolute;
    line-height: 5px;
    color: var(--white);
    height: min-content;
    display: inline-flex;
    align-items: center;
    top: 20%;
    left: 10%;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    border-radius: 20px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }
  .text__hand {
    font-size: 20px;
    width: 40px;
    height: 40px;
    margin-right: 1rem;
  }
  .social {
    position: absolute;
    left: 2rem;
    width: 30px;
    height: 50px;
    bottom: 10%;
  }
  .social :first-child {
    height: max-content;
  }
  .social :first-child:hover {
    color: rgb(0, 100, 250);
  }
  .social :last-child {
    color: rgba(255, 255, 255, 0.4);
    height: max-content;
  }
  .social :last-child:hover {
    color: rgb(255, 255, 255);
  }

  @media (max-width: 768px) {
    .text {
      top: 70%;
      left: 50%;
      margin-left: -8rem;
    }
    .circle {
      width: 25rem;
      height: 25rem;
      margin-top: 3rem;
      top: 10%;
      margin-top: -20rem;
    }
    .circle--fly {
      top: 0;
      width: 25rem;
      height: 100vh;
      border-radius: 0%;
      margin: 0;
    }
    .left {
      left: -40%;
      background: linear-gradient(
        to right,
        rgba(27, 178, 219, 0.424),
        transparent 70%
      );
    }
    .right {
      background: linear-gradient(
        to left,
        hsla(293, 51%, 54%, 0.424),
        transparent 70%
      );
      right: -40%;
    }
    .social {
      display: flex;
      left: 50%;
      width: 70px;
      height: 30px;
      bottom: 6%;
      margin-left: -30px;
    }
    .social a:last-child {
      margin-left: 1rem;
    }
  }
</style>
