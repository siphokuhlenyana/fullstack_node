<template lang="">
    <div>
        <h1><u>Register to redeem your token !! </u></h1>

<label>Name :<input type="text" v-model="name"></label><br><br>
<label>Surname  :<input type="text" v-model="surname"></label><br><br>
<label>Age :<input type="text" v-model="age"></label><br><br>
<label>Favourite coding language :<input type="text" v-model="fav_coding_lang"></label><br><br>
<label>Favourite car :<input type="text" v-model="fav_car"></label><br><br>
<label>Eye Colour:<input type="text" v-model="eye_color"></label><br><br>
<label>Create a password  :<input type="password" v-model="password"></label><br><br>
<label>Create a username :<input type="text" v-model="username"></label><br><br>

<button @click="addUser()">Add Peer</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            surname:'',
            age:'',
            fav_coding_lang:'',
            fav_car:'',
            eye_color:'',
            password:'',
            username:''
            
        }
    },
    methods: {
      addUser(){
        this.$store.dispatch('addUser',this.$data)
      }
    
    }

}
</script>
<style lang="">
    
</style>