<template>
  <div>
    <h1>Add a new planet</h1>
    <div class="card">
        <form @submit="onSubmit" class="add-form">
            <div class="form-control">
                <label>Planet name</label>
                <input 
                type="text" 
                v-model="name" 
                name="name" 
                placeholder="Add Name" />
            </div>
            <div class="form-control">
                <label>Home Star</label>
                <input
                    type="text"
                    v-model="star"
                    name="star"
                    placeholder="Add Home Star"
                />
            </div>
            <div class="form-control">
                <label>Planet Type</label>
                <input
                    type="text"
                    v-model="type"
                    name="type"
                    placeholder="Add Type"
                />
            </div>
            <div class="form-control">
                <label>Planet Mass</label>
                <input
                    type="number"
                    v-model="mass"
                    name="mass"
                    placeholder="Add Mass"
                />
            </div>
            <div class="form-control">
                <label>Planet Radius</label>
                <input
                    type="number"
                    v-model="radius"
                    name="radius"
                    placeholder="Add Radius"
                />
            </div>
            <div class="form-control">
                <label>Planet Distance</label>
                <input
                    type="number"
                    v-model="distance"
                    name="distance"
                    placeholder="Add Distance"
                />
            </div>
            <input type="submit"  value="Save Planet" class="btn btn-block" />
        </form>
        {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
export default {
    setup() {
        const name = ref('')
        const star = ref('')
        const type = ref('')
        const mass = ref()
        const radius = ref()
        const distance = ref()

        const errors = []

        const newPlanet = reactive ({
            // id: Math.floor(Math.random() * 100000),
            planet_name: String,
            home_star: String,
            planet_type: String, 
            mass: Number,
            radius: Number,
            distance: Number
        })

        const onSubmit = (e) => {
            e.preventDefault()
            newPlanet.planet_name = name.value
            newPlanet.home_star = star.value
            newPlanet.planet_type = type.value
            newPlanet.mass = mass.value
            newPlanet.radius = radius.value
            newPlanet.distance = distance.value
            console.log(newPlanet)
            addNewPlanet()
        }

        const addNewPlanet = () => {
            axios.post(`http://127.0.0.1:5000/add_planet`, newPlanet)
            .then(response => {
                console.log(response)  
            })
            .catch(e => {
                errors.push(e)
                console.log(errors)
            })
        }

        return { 
            newPlanet, 
            name, 
            star,
            type,
            mass,
            radius,
            distance,
            onSubmit 
            }
    }
}
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
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 20px;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 80%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>