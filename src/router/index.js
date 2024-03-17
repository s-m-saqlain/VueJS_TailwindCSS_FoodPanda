import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Registeration from '../Pages/Registeration.vue'
import Login from '../Pages/Login.vue'

const routes= [
    { path:'/', component: Home },
    { path:'/Registeration', component: Registeration },
    { path:'/Login', component: Login },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;