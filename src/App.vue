<template>
    <v-app>
        <template v-if=checkLogin()>
            <NavbarUser />
        </template>
        <template v-else>
            <Navbar />
        </template>
        <v-content>
            <router-view></router-view>
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
import Footer from './components/Footer'
import axios from 'axios'

export default {
    name: 'App',

    components: {
        Footer
    },

    data: () => ({
        //
    }),

    methods: {
        checkLogin() {
            var token = localStorage.getItem(token)

            axios.get('http://localhost:5000/users/checkLogin', { headers: { 'x-access-token' : token }}).then((res) => {
                if (res.status == 200) {
                    return true
                } else {
                    return false
                }
            })
        }
    }
}

</script>
