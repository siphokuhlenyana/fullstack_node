import { createStore } from 'vuex'
import axios from 'axios'
import {toast} from 'vue3-toastify'
import "vue3-toastify/dist/index.css";
import {useCookies} from 'vue-cookies'

// import router from '@/router';
axios.defaults.withCredentials =true
axios.defaults.headers =$cookies.get('token')


export default createStore({
  state: {
    users:null,
    fruits:null
  },
  getters: {
  },
  mutations: {
    setFruits(state,payload){
      state.fruits=payload
    }

  },
  actions: {
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:5003/fruits')
      // console.log(data);
      
    commit('setFruits',data)
    },
    async addToCart({commit},fruit_id){
      console.log(fruit_id);
      
      let {data}=await axios.post('http://localhost:5003/fruits/cart',{id:fruit_id})
      console.log(data);
    },
    async addUser({commit},info){
      let {data}=await axios.post('http://localhost:5003/users/insert',info)
      console.log(data);
      // let addedUser =await data.json()
      // commit('insertUser')
      alert(data)
    },
    async singleUser({commit},info){
     
        let {data}=await axios.post('http://localhost:5003/users/login',info)
      //    if(data == true){
      console.log(data)
      $cookies.set('token',data.token)
      if(data){
        toast("This user is logged in ! Wow so easy 👌👌👌❤️!", {
 "theme": "dark",
  "type": "default",
  "position": "top-center",
  "dangerouslyHTMLString": true
})
      }
      // await router.push("/")
      // location.reload()

    
      


      // let message  =data.message;
      // let token =data.token;

      // let addedUser =await data.json()
      // commit('insertUser',addedUser)
      // alert(message +" !🫂🤗🤗 Use the following token :" + token)
      // if(data !==info ){
      //  alert()
      //  }else{
      //    return data
        
      //  }
       
      // }else{
      //   alert("You are not registered ,please sign in !")
      // }
      
    }, 
  //  async getFruits({commit}){
  //     let {data}= await axios.get('http://localhost:5003/fruits')
  //     console.log(data);
      
  //   }
  },

  modules: {
  }
})

