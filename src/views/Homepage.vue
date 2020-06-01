<template>
    <div class="homepage">
        <NavbarGuest />
        <div class="px-3" style="background-color:#9E9E9E">
            <v-row class="fill-height" align="center" justify="center">
                <v-col cols="12" md="1"></v-col>
                <v-col cols="12" md="4">
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="headline mx-2 text-center text-md-left">Cari Jasa Freelance yang Bisnis Kamu Butuhkan</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="11">
                            <v-text-field
                                class="mx-2"
                                background-color="white"
                                outlined
                                flat
                                dense
                                single-line
                                append-icon="mdi-magnify"
                                label="Search"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="pa-0" cols="6" md="4">
                    <v-img
                        class="d-none d-sm-flex"
                        src="https://pngimg.com/uploads/thinking_man/thinking_man_PNG11610.png" 
                        height="300" 
                        contain></v-img>
                </v-col>
            </v-row>
        </div>
        <div class="pa-4">
            <v-container>
                <p class="headline ma-4">Jasa Populer</p>
                    <v-slide-group show-arrows mx-auto>
                        <v-slide-item v-for="n in 12" :key="n">
                            <v-card class="ma-4">
                                <v-img src="https://picsum.photos/seed/picsum/300/200"></v-img>
                                <v-card-subtitle>Lorem Ipsum</v-card-subtitle>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
            </v-container>
        </div>
        <div class="py-4 px-8">
            <v-container>
                <p class="headline ma-4"> Cari Berdasarkan Kategori</p>
                <v-row v-for="i in 2" :key="i" align="center" justify="center">
                    <v-card class="pa-3 mx-4" v-for="j in 4" :key="j" flat>
                        <v-btn class="mx-2" large fab>
                            <v-icon>mdi-help</v-icon>
                        </v-btn>
                        <v-card-title>
                            Lorem
                        </v-card-title>
                    </v-card>
                </v-row>
            </v-container>
        </div>
        <div class="pa-4" style="background-color:#E5E9F2">
            <div class="fill-height" align="center" justify="center">
                <p class="display-1">Cari Jasa Freelance yang Kamu Butuhkan Sekarang</p>
                <p class="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus odio voluptatem! Rem beatae cum aspernatur ducimus amet praesentium itaque nisi</p>
                <v-btn dark @click="overlayRegister = !overlayRegister">Mari Mulai</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarGuest from '../components/NavbarGuest'

export default {
    mounted () {
        
    },

    data: () => ({
        name: 'home',
        overlayRegister: false,
        overlayLogin: false,
    }),

    components: {
        NavbarGuest
    },

    methods: {
        validate () {
            this.$refs.form_register.validate()
        }
    }
}
</script>