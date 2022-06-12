<template>
    <body>
        <h1>Profile</h1>
        <table>
        <tr>
            <th>Email:</th>
            <td>{{user_info.email}}</td>
        </tr>
        <tr>
            <th>Username:</th>
            <td>{{user_info.username}}</td>
        </tr>
        <tr>
            <th>Full Name:</th>
            <td>{{user_info.full_name}}</td>
        </tr>
        <tr>
            <th>Gender:</th>
            <td>{{user_info.gender}}</td>
        </tr>
        <tr>
            <th>Birth Date:</th>
            <td>{{user_info.birth_date}}</td>
        </tr>
        </table>
  </body>
</template>

<script>
import {getAPI} from '../api'

export default {
  data () {
    return {
      user_info: "",
    }
  },
  
  mounted (){
    this.getUserInfo();
  },

  methods: {
    getUserInfo () {
        getAPI('/api/user/',
        { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
      .then(response => this.user_info = response.data)
    }
  }
}

</script>

<style scoped>
table th {
  text-align: left;
  width: 100px;
}
</style>