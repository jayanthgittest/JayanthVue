<template>
  <div class="home">
    <div class="navbar">
      <!-- Navigation Links -->
      <router-link class="nav-link"  to="/jayanth" style="text-decoration: none;">Home</router-link>
      <router-link class="nav-link" to="/jayanth/about">About</router-link>
      <router-link class="nav-link" to="/jayanth/skills">Skillset</router-link>
    </div>

    <div class="content" >
      <div class="image-container">
        <!-- Image goes here -->
        <img style="border-radius: 2%;width: 80%" src="../assets/profile-photo.jpg" alt="Home Image" />
      </div>

      <div class="info">
        <!-- Information about your landing page -->
        <h1 style="font-size: 50px;">Welcome to My World</h1>
        <p>Hello, I'm <strong>Jayanth Kumar</strong>, a passionate Software Engineer working at <strong>LTIMindtree</strong>. I'm on a mission to create innovative and impactful software solutions.</p>
        <p>With a Bachelor's degree in Computer Engineering from <strong>SJBIT, Bangalore</strong>, I bring a strong foundation of technical skills and knowledge to every project I undertake.</p>
        <p>Explore my portfolio and discover how I can help your business succeed in the digital age.</p>
        <p>Let's turn your ideas into reality!</p>
      </div>
    </div>
    <h1 style="display: block;margin-left: 36%;font-size: 45px;">Explore more about me!</h1>

  </div>
</template>

<script>
export default {
  name: 'MyHome',
};
</script>

<style scoped>
.home
  .navbar{
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    text-decoration: none;
  }
  
  
  .navbar:hover{
    color:#fff;
    text-decoration: none;
  }
  .nav-link {
  color: white;
  text-decoration: none;
}
  .content{
    display: flex;
    align-items: center;
  }
    

  .image-container{
    flex: 1;
    padding: 20px;

  }
    
    img{
        max-width: 100%;
      height: auto;
    }
      

  .info{
    flex: 2;
    padding: 20px;
  }
    

    h1{
        font-size: 24px;
      margin-bottom: 20px;
    }
      

    p{
        font-size: 16px;
      margin-bottom: 10px;
    }
      
</style>