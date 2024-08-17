<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/getFruits">Get Fruits</router-link>|
    <!-- <router-link to="/about">Select Fruit</router-link>|
    <router-link to="/insertFruit">Insert Fruit</router-link>|
    <router-link to="/deleteFruit">Delete Fruit</router-link>|
    <router-link to="/updateFruit">Update Fruit</router-link>|

    <router-link to="/getData">Get Data</router-link>|
    <router-link to="/selectUser">Select User</router-link>|
    <router-link to="/insertUser">Insert User</router-link>|
    <router-link to="/deleteUser">Delete User</router-link>|
    <router-link to="/updateUser">Update User</router-link>| -->
    <router-link to="/register">Register</router-link>|
    <div v-if="!$cookies.get('token')">
          <router-link to="/login">Login</router-link>
    </div>
    <div v-else>
      <button @click="logout()">Log Out</button>
    </div>

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default{
  methods: {
    logout(){
      !this.$cookies.remove('token')
      location.reload()
    }
  },
}
</script>