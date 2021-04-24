<script>
  import Linke from "svelte-icons/fa/FaLinkedin.svelte";
  import Github from "svelte-icons/fa/FaGithub.svelte";
  import Hand from "svelte-icons/io/IoMdHand.svelte";
</script>

<header>
  <div class="circle--fly left" />
  <div class="circle circle--center" />
  <div class="circle--fly right" />
  <div class="text">
    <span class='text__hand'>
      <Hand />
    </span>
    <div>
      <h2>Hola, Soy</h2>
      <h3>Erick Arita</h3>
      <p>Desarrollador Frontend</p>
    </div>
  </div>
  <div class="social">
    <a href="__blank"><Linke /></a>
    <a href="__blank"><Github /> </a>
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
    top: 25%;
    left: 10%;
    background-color: rgba(250, 235, 215, 0.252);
    padding: 1rem;
    border-radius: 20px;
  }
  .text__hand {
    font-size: 10px;
    height: 40px;
    width: 40px;
    height: 100%;
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
    /* color: blue; */
    height: max-content;
  }
  .social :last-child {
    color: white;
    height: max-content;
    padding: 1rem 0 0 0;
    margin: 1rem 0 0 0;
  }
  @media (max-width: 768px) {
    .circle {
      width: 25rem;
      height: 25rem;
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
  }
</style>
