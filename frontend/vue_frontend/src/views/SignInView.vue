<template>
    <body>
        <p v-if="error_text">{{error_text}}</p>
        <form @submit.prevent="signIn">
            <input type="email" placeholder="Email" required v-model="email"/>
            <input type="password" placeholder="Password" required v-model="password"/>
        <div class="submit">
            <button id="submit_button">Sign In</button>
        </div>
        </form>
    </body>
</template>



<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            error_text: "",
        }
    },
    methods: {
        signIn() {
            this.$store.dispatch('userLogin', {
                email: this.email,
                password: this.password,
            }).then(() => {
                this.$router.push({name: 'Home'})
            }).catch(error => {
                this.error_text = error.response.data.non_field_errors[0]
                console.log(error)
            })
        }
    }
}
</script>