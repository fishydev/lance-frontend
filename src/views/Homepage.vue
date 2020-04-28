<template>
    <div class="homepage">
        <div class="px-3" style="background-color:#9E9E9E">
            <v-row class="fill-height" align="center" justify="center">
                <v-col class="px-12" cols="6">
                    <p class="headline">Cari Jasa Freelance yang Bisnis Kamu Butuhkan</p>
                    <v-text-field background-color="white" outlined flat dense append-icon="mdi-magnify"></v-text-field>
                </v-col>
                <v-col class="pa-0" cols="6">
                    <v-img src="https://pngimg.com/uploads/thinking_man/thinking_man_PNG11610.png" height="300" contain></v-img>
                </v-col>
            </v-row>
        </div>
        <div class="pa-4">
            <p class="headline ma-4">Jasa Populer</p>
            <v-slide-group show-arrows>
                <v-slide-item v-for="n in 9" :key="n">
                    <v-card class="ma-4">
                        <v-img src="https://picsum.photos/seed/picsum/300/200"></v-img>
                        <v-card-subtitle>Lorem Ipsum</v-card-subtitle>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </div>
        <div class="py-4 px-8">
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
        </div>
        <div class="pa-4" style="background-color:#E5E9F2">
            <div class="fill-height" align="center" justify="center">
                <p class="display-1">Cari Jasa Freelance yang Kamu Butuhkan Sekarang</p>
                <p class="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus odio voluptatem! Rem beatae cum aspernatur ducimus amet praesentium itaque nisi</p>
                <v-btn dark>Mari Mulai</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: 'home',
    })
}
</script>