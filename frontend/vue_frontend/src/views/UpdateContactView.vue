<template>
    <body>
        <h1>Update Contact</h1>
        <form @submit.prevent="updateContact">
            <input type="text" placeholder="Name" required v-model="full_name" style="margin-right: .5em"/>
            <input type="number" placeholder="Phone" v-model="phone" style="margin-right: .5em"/>
            <input type="email" placeholder="Email" v-model="email" style="margin-right: .5em"/>
            <input type="text" placeholder="Info" v-model="info" style="margin-right: .5em"/>
            <div class="submit">
                <button id="submit_button" style="margin-top: .5em">Update Contact</button>
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
            phone: 0,
            email: "",
            info: "",
        }
    },
    mounted (){
        if (this.$store.getters.authorized) {
            this.getData();
        } else {
            this.$router.push({name: 'SignIn'})
        }
    },
    methods: {
        getData() {
            getAPI('/contacts/'+this.$route.params.id+'/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => {
                this.full_name = response.data.full_name
                this.phone = response.data.phone
                this.email = response.data.email
                this.info = response.data.info
            })
        },
        updateContact() {
            getAPI.put('/contacts/'+this.$route.params.id+'/', {
                full_name: this.full_name,
                phone: this.phone,
                email: this.email,
                info: this.postinfo_id
            }, { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
