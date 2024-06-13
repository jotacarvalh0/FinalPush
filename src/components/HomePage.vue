<template>
  <main class="wrapper">
    <section class="featured-box">
      <div class="lastNews" id="new">
        <section class="lastnewsTitule">
          <h1 class="titleLast">ÚLTIMAS NOTICIAS</h1>
          <H2 class="lineMain" id="line01"></H2>
        </section>

        <div>
          <div class="new marginBottom">
            <div class="leftNews">
              <router-link :to="{ name: 'NewsPage', params: { id: 1}}">
                <div class="image-container">
                  <img class="img-50" src="../assets/53667618555-7a19123f5e-k.avif">
                  <div class="image-info">
                    <p class="namePost">LOUD sofre, mas bate paiN para ser tetra do CBLOL</p>
                    <p class="subPost">VALORANT</p>
                    <p class="subtitle">Título consolida recordes de jogadores; veja marcas</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="rightnews">
              <router-link :to="{ name: 'NewsPage', params: { id: 2 }}">
                <div class="image-container">
                  <img class="img-25" src="../assets/f1-24.avif">
                  <div class="image-info-25">
                    <p class="namePost">Review: F1 24 avança no modo</p>
                    <p class="namePost">carreira e piora na jogabilidade</p>
                    <p class="subPost">F1 24</p>
                    <p class="subtitle">Lançado nesta sexta-feira, F1 24 possui mudanças que</p>
                    <p class="subtitle-2">variam para melhor e pior</p>
                  </div>
                </div>
              </router-link>
              <router-link :to="{ name: 'NewsPage', params: { id: 3 }}">
                <div class="image-container">
                  <img class="img-25" src="../assets/captura-de-tela-2024-04-30-142122.avif">
                  <div class="image-info-25">
                    <p class="namePost">Haaland ganha personagem em</p>
                    <p class="namePost">Clash of Clans</p>
                    <p class="subPost">Clash of Clans</p>
                    <p class="subtitle">Atacante do Manchester City se tornou "Rei Bárbaro"</p>
                    <p class="subtitle-2">no popular jogo de celular</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

      </div>

        <section class="lastnewsTitule2">
            <H2 class="lineMain"></H2>
            <h1 class="titleLast" id="cronogramaPage">CRONOGRAMA</h1>
        </section>

        <div class="cronograma-new">
            <div class="newCronograma">
              <div class="leftCro">
                <h1 class="subTitleLast"> SABADO 22/06</h1>
                <div>
                  <img class="ImageNew" src="../assets/cs2_image.png">
                </div>
              </div>
              <div class="textnew">
                <h1 class="namePostCro">COUNTER STRIKER 2</h1>
                <h1 class="subPost">MAJOR 2024</h1>
                <p class="subtitleCro">Segunda edição do principal campeonato de Counter-Strike 2 de 2024 será organizado pela</p>
                <p class="subtitleCro">Perfect World.</p>
              </div>
            </div>
            <H2 class="linemain2"></H2>
        </div>

        <div class="cronograma-new">
            <div class="newCronograma">
              <div class="leftCro">
                <h1 class="subTitleLast"> SEGUNDA 24/06</h1>
                <div>
                  <img class="ImageNew" src="../assets/fortnite_image.png">
                </div>
              </div>
              <div class="textnew">
                <h1 class="namePostCro">FORTNITE</h1>
                <h1 class="subPost">CAMPEONATO GLOBAL DO FNCS 2024</h1>
                <p class="subtitleCro">Podem anotar na agenda os dias 7 e 8 de setembro. A ação frenética do FNCS 2024 terá seu</p>
                <p class="subtitleCro"> desfecho na Dickies Arena, em FortWorth, Texas (EUA)!</p>
              </div>
            </div>
            <H2 class="linemain2"></H2>
        </div>

        <div class="cronograma-new">
          <div class="newCronograma">
            <div class="leftCro">
              <h1 class="subTitleLast"> SEXTA 28/06</h1>
              <div>
                <img class="ImageNew" src="../assets/free_fire_image.png">
              </div>
            </div>
            <div class="textnew">
              <h1 class="namePostCro">FREE FIRE</h1>
              <h1 class="subPost">FREE FIRE RECEBE QUEBRANDO GELO</h1>
              <p class="subtitleCro">A Garena anunciou, na última quarta-feira (20), que o festival de Ano Novo está de volta em Free</p>
              <p class="subtitleCro">Fire. Quebrando o Gelo traz diversas novidades...</p>
            </div>
          </div>
          <H2 class="linemain2"></H2>
        </div>

    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/gilroy-bold');

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.marginBottom {
  margin-bottom: 80px;
}

.wrapper {
  width: 100%; /* Tornar o wrapper 100% da largura do elemento pai */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/bg_branco.png');
  background-size: cover;
  background-position: center;
}

.featured-box {
  /* Adiciona margem superior e inferior para espaçamento */
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
}

.lastnewsTitule {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.titleLast {
  display: flex;
  justify-content: left;
  font-size: 30px;
  font-family: 'Gilroy-Regular', sans-serif;
  margin-bottom: 0px;
}

.lineMain {
  border-bottom: 1px solid #ccc; /* Adiciona uma borda inferior cinza */
  margin-bottom: 0px; /* Adiciona espaço abaixo da linha */
}

#line01 {
  margin-bottom: 20px;
}

.new {
  display: flex;
  justify-content: center;
}

.rightnews {
  display: flex;
  flex-direction: column;
}

.img-50 {
  justify-content: left;
  height: 400px;
  margin-left: 0
}

.img-25 {
  height: 190px;
  width: 350PX;
  margin-left: 20px;
  margin: 5px
}

.lastnewsTitule2 {
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
}
.cronograma-new .new {
  justify-content: flex-start; /* Alinha o .new à esquerda */
}
.cronograma-new{
  margin-bottom: 80px;
}

.newCronograma {
  display: flex;
}

.leftCro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.subTitleLast {
  font-size: 18px;
  font-family: 'Gilroy-Bold', sans-serif;
}

.ImageNew {
    height: 220px;
    width: 400px;
}

.textnew {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 20px
}

.namePost {
  font-size: 22px;
  font-family: 'Gilroy-Bold', sans-serif;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}

.namePostCro {
  font-size: 22px;
  font-family: 'Gilroy-Bold', sans-serif;
  margin: 0;
}

.subPost {
  font-size: 18px;
  font-family: 'Gilroy-Regular', sans-serif;
  margin: 0;
  
}

.subtitle {
  font-size: 12px;
  font-family: 'Gilroy-Regular', sans-serif;
  margin-bottom: 0;
  margin-top: 8px;
  align-items: flex-start;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}

.subtitleCro {
  font-size: 12px;
  font-family: 'Gilroy-Regular', sans-serif;
  margin-bottom: 0;
  margin-top: 8px;
  align-items: flex-start;
}

.subtitle-2 {
  font-size: 12px;
  font-family: 'Gilroy-Regular', sans-serif;
  margin-bottom: 2px;
  margin-top: 2px;
  align-items: flex-start;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}

.subtitle-2Cro {
  font-size: 12px;
  font-family: 'Gilroy-Regular', sans-serif;
  margin-bottom: 2px;
  margin-top: 2px;
  align-items: flex-start;
}

.linemain2 {
  border-bottom: 1px solid #ccc; /* Adiciona uma borda inferior cinza */
  margin-bottom: 10px; /* Adiciona espaço abaixo da linha */
}

.image-container {
  position: relative;
}

.image-info {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  align-items: flex-start;
  color: white; /* Cor do texto */
  padding: 20px; /* Espaçamento interno */
}

.image-info-25 {
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 0;
  left: 0;
  color: white; /* Cor do texto */
  padding-left: 15px; /* Espaçamento interno */
  padding-bottom: 10px; /* Espaçamento interno */
}

@media screen and (max-width: 600px) {
  .wrapper {
    width: 100%;
  }

  .featured-box {
    width: 90%;
  }

  .img-50, .img-25 {
    height: auto;
    width: 100%;
  }

  .new, .newCronograma {
    flex-direction: column;
  }
}

</style>
