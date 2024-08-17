<template>
    <div  class="about" >
      <h1>This is a Get Fruits page 🍉🍇🍌🍎</h1>
  
      <section v-for="fruit in  $store.state.fruits" :key="fruit.id" >
        {{ fruit.id }}
      {{ fruit.fruit_name }}
      {{ fruit.weight }}
      {{ fruit.amount }}
      <button v-if="$cookies.get('token')"  @click="addToCart(fruit.id)">Purchase</button>
      </section>

      

      <button @click="getFruits()">Get fruits</button>
    </div>
  </template>
  <script>
  export default
  {
    methods :{
      getFruits(){
        this.$store.dispatch('getFruits')
        // location.reload();
      },
      addToCart(fruit_id){
        this.$store.dispatch('addToCart',fruit_id)
      }
    },
      mounted (){
        this.getFruits()
      }
  }
  
  
  </script>