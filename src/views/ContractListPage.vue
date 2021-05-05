<template>
  <div class="citylist">
    <h4>Contact List</h4>
    <br>
        <!-- <div class="container"> -->
          <div class="row">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" v-model="temp" >
                <button class="btn btn-secondary" type="button" @click="searching"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Search</button>
                <router-link to="/adduser">
                  <button class="btn btn-outline-secondary" type="button"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Add</button>
                </router-link>
              </div>
            </div><!-- /.col-lg-6 -->
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
          </div><!-- /.row -->
        <!-- </div> -->
    <br>
    <div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
    <div class="panel panel-info" >
      <div class="panel-heading">
        <h3 class="panel-title">List of Contacts</h3>
      </div>
      <div class="panel-body">
        <div class="row" >
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="user_alias in filterUsers" v-bind:key="user_alias.id">
        <div class="thumbnail">
          <img :src="`${user_alias.imageUrl}`" width="150">
          <div class="caption">
            <p><b>{{user_alias.firstName}} {{user_alias.lastName}}</b></p>
            <p class="mobile">Mobile: {{user_alias.mobileNo}}</p>
            <p class="email">Email: {{user_alias.email}}</p>
            <p class="facebook">Facebook: {{user_alias.facebook}}</p>
            <router-link :to="{ path: 'editpage', name: 'EditPage', params:{userId: user_alias._id} }">
                <button class="btn btn-primary" role="button"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button>&nbsp;
            </router-link>   
                <button class="btn btn-danger" role="button" @click="delUser(user_alias._id)"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span></button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    </div>
    <br>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "ContractListPage",

  data() {
    return {
      Users: [],
      search: "",
      uid: "",
      temp:""
    };
  },
  mounted() {
    axios
      .get("https://git.heroku.com/sheltered-plateau-34648.git/contacts/getmany")
      .then((response) => {
        console.log(response.data);
        this.Users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filterUsers: function () {
      return this.Users.filter((user) => {
        return user.firstName.match(this.search);
      });
    },
  },
  methods: {
    searching(){
      this.search=this.temp
    },
    DELETE(id) {
      this.uid = id;
    },
    delUser(UserId) {
      axios
        .delete("https://git.heroku.com/sheltered-plateau-34648.git/contact/delete/" + UserId)
        .then(() => {
          console.log("Delete userId: " + UserId);
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.reload();
    },
  },
};
</script>