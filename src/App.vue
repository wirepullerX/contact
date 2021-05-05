//App.vue
<template>
  <div>
    <nav class = "navbar navbar-dark bg-dark">
      <div class = "navbar-brand align-baseline" >
      <img src="./assets/logo.png" width="30" height="30" class="d-inline-block" alt="">
      Contracts
      </div>
      <a class = "navbar-nav ml-auto" href="/loginpage"> 
        <img src="https://cdn.discordapp.com/attachments/839145941407236117/839371245492895754/images.gif" width="30" height="30" class="" alt="">
      </a>
    </nav>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>
