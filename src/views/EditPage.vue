<template>
  <div class="container">
    <form>
      <div class="panel panel-info">
        <div class="panel-heading">
          <h4>Contact Edit</h4>
        </div>
        <div class="panel-body">
          <div class="form-group" >
            <label class="pull-left" for="inputContactID">Contact ID <span class="text-danger">*</span> : </label>
            <input type="text" class="form-control" id="inputContactID" placeholder="Contact ID" required v-model="User.contactID">
          </div>
          <div class="form-group" >
            <label class="pull-left form-label" for="inputFirstName">First Name <span class="text-danger">*</span> : </label>
            <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" required v-model="User.firstName">
          </div>
          <div class="form-group" >
            <label class="pull-left" for="inputLastName">Last Name <span class="text-danger">*</span> : </label>
            <input type="text" class="form-control" id="inputLastName" placeholder="Last Name eiei" required v-model="User.lastName">
          </div>
          <div class="form-group" >
           <label class="pull-left">Mobile No. <span class="text-danger">*</span> : </label>
           <input type="text" class="form-control" placeholder="Mobile No." required v-model="User.mobileNo">
          </div>
          <div class="form-group" >
           <label class="pull-left">Email: </label>
           <input type="email" class="form-control" placeholder="Email" v-model="User.email">
          </div>
          <div class="form-group" >
            <label class="pull-left">Facebook: </label>
            <input type="text" class="form-control" placeholder="Facebook" v-model="User.facebook">
          </div>
          <div class="form-group" >
            <label class="pull-left">Imagae Url: </label>
            <input type="text" class="form-control" placeholder="Image Url" v-model="User.imageUrl">
          </div>
        </div>
      </div>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="submit" class="btn btn-outline-primary" @click="updateToAPI"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>Save</button>
        <router-link to="/">
            <button type="button" class="btn btn-outline-primary"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Close</button>
        </router-link>  
      </div>
    </form>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  name: 'EditPage',
  data() {
    return {
        User: {
            contactID:'',
            firstName: '',
            lastName: '',
            mobileNo:'',
            email: '',
            facebook:'',
            imageUrl:''
        } 
        
    }
  },
  methods: {
        updateToAPI(){
          if(this.User.firstName=='' || this.User.lastName=='' || this.User.contactID=='' || this.User.mobileNo==''){
            alert('pls enter val')
          }else{
            if(this.User.imageUrl==''){
              this.User.imageUrl = 'https://cdn.discordapp.com/attachments/663016153785827341/839366504856158228/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.png'
            }
            //console.log(this.$route.params.userId)
            let newUser = {
                contactID: this.User.contactID,
                firstName: this.User.firstName,
                lastName: this.User.lastName,
                mobileNo: this.User.mobileNo,
                email: this.User.email,
                facebook: this.User.facebook,
                imageUrl: this.User.imageUrl
            }
            axios.post('http://localhost:5000/contacts/update/'+this.$route.params.userId, newUser)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })
                this.$router.replace('/contractlistpage')
          }
        }
    },
    mounted() {
        axios.get('http://localhost:5000/contact/read/'+this.$route.params.userId)
            .then((response)=>{
                //console.log(response.data)
                this.User = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
    },
}
</script>