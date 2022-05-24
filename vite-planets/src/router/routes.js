
import AllPlanets from '../views/AllPlanets.vue'
import PlanetDetails from '../views/PlanetDetails.vue'
import AddPlanet from '../views/AddPlanet.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: AllPlanets
        // component: () => import('@/views/AllPlanets.vue') 
    },
    { 
        name: 'planet',
        path: '/planet_details/:id',
        component: PlanetDetails
        // component: () => import('@/views/PlanetDetails.vue') 
    },
    { 
        name: 'planet_add',
        path: '/planet_add',
        component: AddPlanet
        // component: () => import('@/views/AddPlanet.vue') 
    }
]

export default routes