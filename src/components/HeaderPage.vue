// src/components/HeaderPage.vue
<template>
  <div id="header">
    <div id="content_header">
      <nav>
        <img src="../assets/logo_branca.jpg" alt="logo" id="logo">

        <div class="nav-container">
          <a href="#" class="nav-item">games</a>
          <a href="#new" class="nav-item">notícias</a>
          <a href="#cronogramaPage" class="nav-item">cronograma</a>
        </div>

      </nav>

      <div id="presentation">
        <div id="text_presentation">
          <p id="text_1">SEU GAME</p>
          <p id="text_2">FAVORITO</p>
          <p id="text_3">veja abaixo as mais novas notícias e não perca nenhuma novidade</p>
        </div>
        <button id="news_button">novidades</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style scoped>
#header {
  background-image: url(../assets/fundo_header.jpg);
  width: 100%;
  height: 800px;
  margin-top: 0;
}

#content_header {
  justify-content: center;
  align-items: center; 
  padding: 50px;
  margin: -60px 134px 0 134px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

#seach_icon {
  height: 50px;
}

#presentation {
  width: 490px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  font-weight: bold;
  font-size: 70px;
  color: white;
  margin-top: 200px;
}

#text_presentation :nth-child(2) {
  font-size: 75px;
  background: -webkit-linear-gradient(left, #0A7AE5, #04F460);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#text_presentation :nth-child(3) {
  font-size: 25px;
}

#news_button {
  background-image: linear-gradient(to right, #0A7AE5, #04F460);
  width: 395px;
  height: 108px;
  font-size: 70px;
  font-weight: bold;
  border: none;
  border-radius: 42px;
  margin: 0 auto;
  color: white;
}

.nav-container {
  display: flex;
}

.nav-item {
  color: white;
  margin: 0 20px;
  position: relative;
  padding: 10px 0;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

.nav-item:nth-child(1)::after { background-color: #0A7AE5; }
.nav-item:nth-child(2)::after { background-color: #0A7AE5; }
.nav-item:nth-child(3)::after { background-color: #0A7AE5; }
.nav-item:nth-child(4)::after { background-color: #0A7AE5; }

#page_merge {
  background-image: url(../assets/interceção_pagina_png.png);
  height: 160px;
  margin-top: 150px;
}

#games {
  display: flex;
  padding: 50px;
  margin: 75px 134px 0 134px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 25px;
  color: white;
}
</style>
