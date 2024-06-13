<template>
    <main id="footer">
        <section id="content_footer">
            
            <img id="logo_footer" src="../assets/LOGO_WHITE.png" alt="#">
            
            <div id="social_media">
              <h3>REDES SOCIAIS</h3>
              <div id="icons_container">
                <a href=""><img class="media_icons" src="../assets/INSTAGRAM (1).png" alt="#"></a>
                <a href=""><img class="media_icons" src="../assets/FACEBOOK (1).png" alt="#"></a>
                <a href=""><img class="media_icons" src="../assets/WHATSAPP (1).png" alt="#"></a>
                <a href=""><img class="media_icons" src="../assets/TWITTER (1).png" alt="#"></a>
              </div>
            </div>
            
            <div id="games_footer">
              <h3>GAMES</h3>
              <div id="game_list">
                <a class="game_names" href="">Valorant</a>
                <a class="game_names" href="">Free Fire</a>
                <a class="game_names" href="">League of Legends</a>
                <a class="game_names" href="">Rainbow Six</a>
                <a class="game_names" href="">Fortnite</a>
                <a class="game_names" href="">Counter Strike 2</a>
              </div>
            </div>
        </section>

        <section id="rights_footer">
          <hr>
          <p>© 2024 TODOS OS DIREITOS RESERVADOS</p>
        </section>


    </main>
</template>

<script>
    export default{
        name: 'FooterPage'
    }
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/gilroy-bold');

html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  *{
    padding: 0;
    margin: 0;
  }

  #footer{
    background-image: url(../assets/footer.png);
    background-position: center center;
    width: 100%;
    height: 500px;
    margin-top: 0;
  }

  #content_footer{
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding: 60px 0 0 50px;
  }  

  #logo_footer{
    width: 135px;
    height: 160px;
  }

  #social_media{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 175px;
  }

  h3{
    font-size: 25px;
    font-family: 'Gilroy-Regular', sans-serif;
  }
  .media_icons{
    width: 50px;
    height: 50px; 
    gap: 5px;
    
  }

  #icons_container{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }


  #games_footer{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start
  }

  #game_list{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    font-size: 20px;
  }

  .game_names{
    color: aliceblue;
    font-family: 'Gilroy-Regular', sans-serif;
  }
  
  hr{
    height: 1px;
    background-color: #0076EA;
    margin: 20px 0;
  }

  #rights_footer{
    padding-top: 100px;
  }

  #rights_footer p{
    font-size: 20px;
    font-family: 'Gilroy-Regular', sans-serif;
  }
</style>