<template>
    <div>
        <v-app-bar color="grey lighten 2" dense dark flat>
            <v-toolbar-title>LANCE</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="blue-grey darken-4">
                About
            </v-btn>
            <v-btn class="mx-2" text color="blue-grey darken-4" @click="overlayLogin = !overlayLogin">
                Sign In
            </v-btn>
            <v-btn color="blue-grey darken-4" @click="overlayRegister = !overlayRegister">
                Join
            </v-btn>
        </v-app-bar>
        <v-card class="mx-auto" color="grey lighten 2" flat tile>
        </v-card>
        <!-- OverlayLogin -->
        <v-overlay :value="overlayLogin">
            <v-card class="mx-5" outlined light>
                <v-toolbar dense flat>
                    <v-toolbar-title>Log in to LANCE</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn text @click="overlayLogin = !overlayLogin" :ripple="false">
                        <v-icon right>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text class="pb-0">
                    <v-form
                        id="login_form"
                        ref="form_login"
                        v-model="valid"
                        lazy-validation
                        @submit.prevent="postLogin">
                        <v-alert
                            dense
                            :type="loginMsg.success ? 'info' : 'error'"
                            :value="true"
                            v-if="showAlertLogin">
                            {{ loginMsg.message }}
                        </v-alert>
                        <v-text-field
                            v-model="modelLogin.email"
                            :rules="emailRules"
                            label="Email"></v-text-field>
                        <v-text-field
                            v-model="modelLogin.password"
                            label="Password"
                            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="passwordRules.required"
                            :type="show_password ? 'text' : 'password'"
                            @click:append="show_password = !show_password"></v-text-field>
                        <v-btn
                            block
                            depressed
                            color="success"
                            class="my-3"
                            type="submit"
                            form="login_form">Login</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-overlay>
        <!-- Overlay register -->
        <v-overlay :value="overlayRegister">
            <v-card class="mx-5" outlined light>
                <v-toolbar dense flat>
                    <v-toolbar-title>Create Account</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn 
                        text
                        @click="overlayRegister = !overlayRegister"
                        :ripple="false">
                        <v-icon right>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text class="pb-0">
                    <v-form
                        id="register_form"
                        ref="form_register"
                        v-model="valid"
                        lazy-validation
                        @submit.prevent="postRegister">
                        <v-alert
                            dense
                            :type="registerMsg.success ? 'info' : 'error'"
                            :value="true"
                            v-if="showAlertRegister">
                            {{ registerMsg.message }}
                        </v-alert>
                        <v-text-field
                            v-model="modelRegister.email"
                            :rules="emailRules"
                            label="Email"></v-text-field>
                        <v-text-field
                            v-model="modelRegister.username"
                            label="Username"></v-text-field>
                        <v-text-field
                            v-model="modelRegister.password"
                            label="Password"
                            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="passwordRules.required"
                            :type="show_password ? 'text' : 'password'"
                            @click:append="show_password = !show_password"></v-text-field>
                        <v-btn
                            color="blue"
                            block
                            depressed
                            type="submit"
                            form="register_form">Register</v-btn>
                    </v-form>
                </v-card-text>
                <v-card-text class="pb-0">
                    <p class="text-center">By creating an account, you agree to LANCE's Terms of Service</p>
                </v-card-text>
            </v-card>
        </v-overlay>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        show_password: false,
        valid: false,
        email: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        confirm_password: '',
        passwordRules: [
            v => !!v || 'Required'
        ],
        showAlert: false,
        overlayRegister: false,
        overlayLogin: false,
        modelRegister: {
            email: '',
            username: '',
            password: ''
        },
        registerMsg: {
            success: false,
            message: ''
        },
        modelLogin: {
            email: '',
            password: ''
        },
        loginMsg: {
            success: false,
            message: ''
        }
    }),

    methods: {
        postRegister () {
            if (this.$refs.form_register.validate()) {
                var dataRegister = {
                    email: this.modelRegister.email,
                    username: this.modelRegister.username,
                    password: this.modelRegister.password,
                    university: ''
                }
            }

            axios.post('https://lance-be.herokuapp.com/users/register', dataRegister).then((res) => {
                if (res.status == 200) {
                    localStorage.setItem('token', res.data.token)

                    this.$router.push({
                        name: 'Homepagein'
                    })
                } else {
                    this.registerMsg.message = res.data.message
                    this.showAlertRegister = true
                }
            })
        },

        postLogin() {
            if(this.$refs.form_login.validate()) {
                var dataLogin = {
                    email: this.modelLogin.email,
                    password: this.modelLogin.password
                }

            }

            axios.post('https://lance-be.herokuapp.com/login', dataLogin).then((res) => {
                if (res.status == 200) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('email', this.modelLogin.email)

                    this.$router.push({
                        name: 'Homepagein'
                    })
                } else {
                    this.loginMsg.message = res.data.message
                    this.showAlertLogin = true
                }
            })
        }
    }
}
</script>