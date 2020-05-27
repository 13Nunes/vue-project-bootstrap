<template>
  <div id="page">
    <div class="text-block">
      <h1>
        Terceiro slide
      </h1>
      <p>
        No arquivo App.vue temos uma fonte customizada, a biblioteca de animações animate.css
        e uma biblioteca de ícones do Material Design. Customize conforma achar necessário.
      </p><br>

      <a href="https://github.com/13Nunes/vue-project-bootstrap" id="start-jorney" target="_blank">Ir para o repositório</a>
    </div>
    <div class="navigation animated zoomIn">
      <a href="javascript:void(0)" @click="goToRoute('/')">&#9679;</a>
      <a href="javascript:void(0)" @click="goToRoute('/slide2')">&#9679;</a>
      <a href="javascript:void(0)" @click="goToRoute('/slide3')" class="selected">&#9679;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide 3',
  methods: {
    goToRoute(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>

<style lang="scss" scoped>
  $primary: $PRIMARY;

  h1, p{
    color: #FFFFFF;
    margin: 0;
    font-family: 'sanukOT', sans-serif;
  }
  h1{
    font-size: 2.5vw;
    text-align: center;
    font-weight: bold;
  }
  hr{
    margin-bottom: 3vw;
  }
  p{
    font-size: 1.6vw;
    font-weight: 400;
  }

  h1{
    color: #FFFFFF;
    margin: 0;
    font-family: 'sanukOT', sans-serif;
    font-weight: bold;
    font-size: 2.3vw;
    text-align: center;
  }

  #page{
    background-color: $primary;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }

  #start-jorney{
    display: inline-flex;
    font-family: 'sanukOT', sans-serif;
    font-weight: bold;
    font-size: 1.8vw;
    border: 1px solid #FFFFFF;
    background-color: #74BF95;
    color: #1B3A45;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5vw 3vw;
  }

  .text-block{
    width: 100%;
    text-align: center;
    bottom: 25vw;
    left: 0;
    padding: 0 18vw;
    box-sizing: border-box;
    margin-top: -5vh;
  }

  .navigation{
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 2vw;
    left: 0;
  }
  .navigation a{
    font-size: 2.3vw;
    text-decoration: none;
    color: #FFFFFF;
    opacity: 0.6;
    display: inline-block;
    padding: 0 0.8vw;
  }
  .navigation a.selected{
    color: #FFFFFF;
    opacity: 1;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    .navigation a{
      font-size: 3.8vw;
    }
  }

  @media (max-width: 768px) and (orientation: portrait) {
    h1{
      font-size: 2.8vh;
    }
    #navigation-types{
      flex-direction: column;
      margin-bottom: 4vh;
    }
    #navigation-types div{
      width: 80%;
    }
    #navigation-types div span{
      font-size: 2vh;
      min-height: 13vh;
    }
    #navigation-types div img{
      width: 70%;
    }
    .text-block{
      padding: 0 5vw;
      top: 5vh;
    }
    #start-jorney{
      font-size: 1.8vh;
      padding: 1.5vh 3vh;
    }
    .navigation a{
      font-size: 7vw;
    }
  }
</style>