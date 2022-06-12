<template>
  <body>
    <h1>Contacts</h1>
    <button id="submit_button" @click="createContact">Create New Contact</button>
      <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <td>{{contact.full_name}}</td>
                    <td>{{contact.email}}</td>
                    <td>{{contact.phone}}</td>
                    <td>
                        <button @click="updateContact(contact.id)">
                            <img src="../../images/pencil.png" width="20" height="20"/>
                        </button>
                    </td>
                    <td>
                        <button @click="deleteContact(contact.id)">
                            <img src="../../images/trash.webp" width="20" height="20"/>    
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        
      </div>
  </body>
</template>

<script>
import {getAPI} from '../api'

export default {
  data () {
    return {
      contacts: [],
    }
  },
  
  mounted (){
    if (this.$store.getters.authorized) {
        this.getContacts();
    } else {
        this.$router.push({name: 'SignIn'})
    }
  },

  methods: {
    getContacts() {
      getAPI('/api/contacts/'+this.$store.state.user_id+'/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => this.contacts = response.data)
    },
    createContact() {
        this.$router.push({name: 'CreateContact'})
    },
    updateContact(contact_id) {
        this.$router.push({name: 'UpdateContact', params: {id: contact_id}})
    },
    deleteContact(id){
      getAPI.delete('/contacts/'+id+'/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => {
        console.log(response)
        this.getContacts()
      }).catch(error => {
          console.log(error)
      })
    },
  }
}

</script>