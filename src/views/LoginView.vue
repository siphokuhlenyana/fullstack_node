<template lang="">
    <div  v-if ="!$cookies.get('token')" :style="{backgroundColor: '#f2f2f2', padding: '1px', border: '1px solid #ccc', width:'350px' ,height :'300px',borderRadius :'10px'}">
        <h1> Login </h1>
<label>Username :<input type="text" v-model="username"></label><br><br>
<label>Password  :<input type="password" v-model="password"></label><br><br>
<button @click="setUser()">Login </button>
    </div>
    <div v-else>
        <get-fruit/>
    
    </div>
</template>
<script>
import GetFruit from './GetFruit.vue'
export default {
   
    data(){
        return{
            username :'',
            password:''
            
        }
    },
    methods: {
      setUser(){
        this.$store.dispatch('singleUser',this.$data)
        location.reload()
      }
    
    },
     components:{
        GetFruit
    }
}
</script>
<style lang="">
    
</style>