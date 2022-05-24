<template>
  <h1>Planet Details</h1>
  <div class="card">
    <h2>Planet Name: {{ planet.planet_name }}</h2>
    <p>Home Star: {{ planet.home_star }}</p>
    <p>Planet Type: {{ planet.planet_type }}</p>
    <p>Planet Mass: {{ planet.mass }}</p>
    <p>Planet Radius: {{ planet.radius}}</p>
    <p>Planet Distance: {{ planet.distance}}</p>
</div>
</template>

<script>
import { defineComponent, onMounted, ref} from 'vue'
import { useRoute } from 'vue-router' 
import axios from 'axios'
export default defineComponent ({
  setup() {
    const route = useRoute()
    console.log("params details", route.params.id)

    const planet = ref([])

    onMounted(async () => {
      await axios
        .get(`http://127.0.0.1:5000/planet_details/${route.params.id}`)
        .then(response => {
          console.log(response.data)
          planet.value = response.data
        })
        .catch((error) => {
          console.error(error);
        })
    })

    return { planet }

    // const planetId = computed(() => {
    //         return parseInt(route.params.id)
    //     })
    //     const planetDetail = computed(() => {
    //         return sourceData.destinations.find(destination => destination.id === destinationId.value)
    //     })
    //     return { destination }
  }
})
</script>

<style>

.card {
  margin: auto;
  padding: 20px;
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

</style>