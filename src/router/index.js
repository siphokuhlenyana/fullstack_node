import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetFruit from '@/views/GetFruit.vue'
import InsertFruit from '@/views/InsertFruit.vue'
import DeleteFruit from '@/views/DeleteFruit.vue'
import UpdateFruit from '@/views/UpdateFruit.vue'
import GetData from '@/views/GetData.vue'
import InsertUser from '@/views/InsertUser.vue'
import SelectUser from '@/views/SelectUser.vue'
import UpdateUser from '@/views/UpdateUser.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/getFruits',
    name: 'getFruits',
    component: GetFruit

  },
  // {
  //   path: '/insertFruits',
  //   name: 'insertFruit',
  //   component:InsertFruit
    
  // },
  // {
  //   path: '/deleteFruit',
  //   name: 'deleteFruit',
  //   component:DeleteFruit
  
  // },
  // {
  //   path: '/updateFruit',
  //   name: 'updateFruit',
  //   component:UpdateFruit
   
  // },{
  //   path: '/getData',
  //   name: 'getData',
  //   component:GetData
 
  // },
  // {
  //   path: '/insertUser',
  //   name: 'insertUser',
  //   component:InsertUser
  
  // },
  // {
  //   path: '/selectUser',
  //   name: 'selectUser',
  //   component:SelectUser
   
  // },{
  //   path: '/deleteUser',
  //   name: 'deleteUser'
  
 
  // },
  // {
  //   path: '/updateUser',
  //   name: 'updateUser',
  //   component:UpdateUser
   
  // },
  {
    path: '/register',
    name: 'registerUser',
    component:RegisterView
   
  },
  {
    path: '/login',
    name: 'loginUser',
    component:LoginView
    
   
  }
]
  


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
