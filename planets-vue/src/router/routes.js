const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/views/AllPlanets.vue') 
    },
    { 
        name: 'planet',
        path: '/planet_details/:id',
        component: () => import('@/views/PlanetDetails.vue') 
    },
    { 
        name: 'planet_add',
        path: '/planet_add',
        component: () => import('@/views/AddPlanet.vue') 
    }
]

export default routes