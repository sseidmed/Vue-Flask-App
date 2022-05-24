<template>
  <div>
    <h1>All Planets</h1>
    <div class="cards">
      <router-link
        v-for="(planet, index) in planets" 
        :key="planet.planet_name" class="card" 
        :style="{ 'background': backgrounds[index]}"
        :to="{ name: 'planet', params: {id: planet.planet_id } }">
          <h2 class="card__apply">
            <p class="card__link">Planet Name: {{ planet.planet_name }} <i class="fas fa-arrow-right"></i></p>
          </h2>
          <!-- <p>Home Star: {{ planet.home_star }}</p>
          <p>Planet Type: {{ planet.planet_type }}</p>
          <p>Planet Mass: {{ planet.mass }}</p>
          <p>Planet Radius: {{ planet.radius}}</p>
          <p>Planet Distance: {{ planet.distance}}</p> -->
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'
// import { useRouter } from 'vue-router'
export default {
  name: 'PlanetAll',
  setup() {
    // const router = useRouter()
    const planets = ref([])

    const backgrounds = [
      'radial-gradient(#1fe4f5, #3fbafe)',
      'radial-gradient(#fbc1cc, #fa99b2)',
      'radial-gradient(#76b2fe, #b69efe)',
      'radial-gradient(#1fe4f5, #3fbafe)',
      'radial-gradient(#fbc1cc, #fa99b2)',
      'radial-gradient(#76b2fe, #b69efe)',
      'radial-gradient(#1fe4f5, #3fbafe)',
      'radial-gradient(#fbc1cc, #fa99b2)',
      'radial-gradient(#76b2fe, #b69efe)',
      'radial-gradient(#1fe4f5, #3fbafe)',
      'radial-gradient(#fbc1cc, #fa99b2)',
      'radial-gradient(#76b2fe, #b69efe)'
    ]

    // properly handle the error
    onMounted(async () => {
      await axios
        .get('http://127.0.0.1:5000/planets')
        .then(response => {
          console.log(response)
          planets.value = response.data
        })
        .catch((error) => {
          console.error(error);
        })
    })

    return { planets, backgrounds }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* STYLING CREDIT to https://codepen.io/ericmahoney/pen/oNLMOYw */

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgba(255, 255, 255, 0.9);
}

/* CARDS */

.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 20px;
  padding: 20px;
  width: 450px;
  min-height: 100px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link,
.card__exit,
.card__icon {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__exit {
  grid-row: 1/2;
  justify-self: end;
}

.card__icon {
  grid-row: 2/3;
  font-size: 30px;
}

.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color: #ffffff;
}

.card__apply {
  grid-row: -6;
  align-self: center;
}


</style>
