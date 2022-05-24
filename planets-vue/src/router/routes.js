
import AllPlanets from '../views/AllPlanets.vue'
import PlanetDetails from '../views/PlanetDetails.vue'
import AddPlanet from '../views/AddPlanet.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: AllPlanets
    },
    { 
        name: 'planet',
        path: '/planet_details/:id',
        component: PlanetDetails
    },
    { 
        name: 'planet_add',
        path: '/planet_add',
        component: AddPlanet
    }
]

export default routes