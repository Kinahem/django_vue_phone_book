<template>
    <body>
        <form class="signup-form" @submit.prevent="handleSubmit">
            <p v-if="errors" id="err_bar">
                <ul>
                    <li v-for="(val, index) in errors" :key="val.id">
                        {{index}}: {{ val[0] }} 
                    </li>
                </ul>
            </p>
            <input class="signup-email" type="email" placeholder="Email" required v-model="email" style="margin-right: .5em"/>
            <input class="signup-username" type="text" placeholder="Username" required v-model="username" style="margin-right: .5em"/>
            <input class="signup-password" type="password" placeholder="Password" required v-model="password" style="margin-right: .5em"/>
            <input class="signup-fullname" type="text" placeholder="Full Name" required v-model="full_name" style="margin-right: .5em"/>
            <input class="signup-date" type="date" placeholder="Birth Date" required v-model="birth_date" style="margin-right: .5em"/>
            <select class="signup-select" required v-model="gender">
                <option disabled value="">Please select gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="H">Boeing AH-64 Apache</option>
            </select>
            <div class="submit">
                <button id="submit_button" label="Create Account" style="margin-top: .5em">Sign Up</button>
            </div>
        </form>
    </body>
</template>


<script>
import {getAPI} from '../api'

export default {
    data() {
        return {
            email: "",
            username: "",
            password: "",
            full_name: "",
            birth_date: "",
            gender: "",
            errors: {},
        }
    },

    methods: {
        handleSubmit() {
            getAPI.post('/api/signup/', {
                email: this.email,
                username: this.username,
                password: this.password,
                full_name: this.full_name,
                birth_date: this.birth_date,
                gender: this.gender,
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                this.errors = error.response.data
                console.log(error)
            })
        }
    }
}
</script>


<style scoped>

</style>