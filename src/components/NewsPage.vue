<template>
  <div class="news-page">
    <div class="news-container">
      <h1 class="namePost">{{ news.title }}</h1>
      <h2 class="subPost">{{ news.subTitle }}</h2>
      <p class="author">{{ news.author }}</p>
      <hr/>
      <p class="content" v-for="(paragraph, index) in news.content" :key="index">{{ paragraph }}</p>
      <img class="news-image" src="../assets/53667618555-7a19123f5e-k.avif" alt="Imagem da notícia">
      <p class="image-caption">{{ news.imageCaption }}</p>
      <p class="content">{{ news.finalParagraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  data() {
    return {
      news: {
        title: 'Final do CBLOL 2024: LOUD sofre, mas bate paiN para ser tetra',
        subTitle: 'Equipe conquista o quarto título seguido no 1º Split do CBLOL 2024',
        author: 'Por Jota Carvalho — Ceará',
        content: [
          'Foi uma série muito mais acirrada do que as anteriores, mas o 1º Split do CBLOL 2024 terminou com o mesmo resultado das três edições anteriores do Campeonato Brasileiro de League of Legends (CBLOL). A LOUD derrotou a paiN Gaming por 3 a 2 na final, no estúdio da Riot Games em São Paulo, neste sábado (20), e conquistou o quarto título consecutivo, ampliando a sequência histórica e inédita no LoL nacional.',
          'Com o suporte Ygor "RedBert" como principal personagem do confronto em melhor de cinco partidas (md5), por causa das provocações e dos gestos trocados com torcedores da paiN, a LOUD abriu 1 a 0, levou a virada, depois empatou e fechou em 3 a 2.'
        ],
        imageCaption: 'Jogadores do time de LoL da LOUD posam troféus e medalhas de campeões do 1º Split do CBLOL 2024 — Foto: Bruno Alvares/Riot Games',
        finalParagraph: 'O resultado adverso ampliou a sequência negativa da paiN em finais, com a equipe chegando ao quinto vice consecutivo, sendo quatro com derrotas para a LOUD. Principal esperança da equipe, o tetracampeão Alexandre "TitaN" perdeu uma decisão pela primeira vez na carreira.'
      }
    };
  },
  mounted() {
    console.log('Dados da notícia:', this.news);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.news-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #f5f5f5;
  font-family: 'Open Sans', sans-serif;
}

.news-container {
  max-width: 800px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.news-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 10px;
}

.image-caption {
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
}

.namePost {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.subPost {
  color: #888888;
  font-size: 14px;
}

.author {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 18px;
  font-style: italic;
  color: #666;
}

.news-content {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  
}

.content{
  margin-bottom: 30px;
}
</style>
