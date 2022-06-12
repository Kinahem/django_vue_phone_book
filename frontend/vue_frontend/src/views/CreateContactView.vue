<template>
    <body>
        <h1>Create Contact</h1>
        <form @submit.prevent="createContact">
            <input type="text" placeholder="Name" required v-model="full_name" style="margin-right: .5em"/>
            <input type="number" placeholder="Phone"  v-model="phone" style="margin-right: .5em"/>
            <input type="email" placeholder="Email" v-model="email" style="margin-right: .5em"/>
            <input type="text" placeholder="Info" v-model="info" style="margin-right: .5em"/>
            <div class="submit">
                <button style="margin-top: .5em">Create Contact</button>
            </div>
        </form>
    </body>
</template>


<script>
import {getAPI} from '../api'

export default {
  data () {
    return {
      full_name: "",
      phone: null,
      email: "",
      info: "",
    }
  },
  methods: {
    createContact() {
        getAPI.post('/contacts/', {
            full_name: this.full_name,
            phone: this.phone,
            email: this.email,
            info: this.postinfo_id
        },{ headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }
        ).then(response => {
            console.log(response);
            this.$router.push({name: 'Home'})
        }).catch(error => {
            console.log(error)
        })
    }
  }
}
</script>

<!-- <style>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
</style> -->
