<template>
  <div class="container">
    <form>
      <div class="panel panel-info">
        <div class="panel-heading">
          <h4>Login</h4>
        </div>
        <div class="panel-body">
          <div class="form-group" >
            <label class="pull-left">User Account</label>
            <input type="text" class="form-control" placeholder="User Account" required v-model="userAccount">
          </div>
          <div class="form-group" >
            <label class="pull-left">Password</label>
            <input type="password" class="form-control" placeholder="Password" required v-model="password">
          </div>
        </div>
        <!-- <router-link to="/"> -->
          <button type="submit" class="btn btn-outline-primary" @click="checkSignIn">Login</button>
        <!-- </router-link>   -->
        <br>
        <br>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      userAccount:'',
      password:'',
    };
  },
  methods:{
    checkSignIn(){
      if(this.userAccount == 'bob' && this.password == '1234'){
        this.$router.replace('/contractlistpage')
      }
      else{
        alert('wrong User Account or Password')
      }
    }
  }
};
</script>