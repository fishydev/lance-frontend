<template>
    <div>
        <NavbarUser />
        <v-container>
            <v-row class="pl-12 pr-12">
                <v-col cols="12" class="pl-12 pr-12">
                    <p class="title mt-12">Jasa Overview</p>
                    <v-divider></v-divider>
                    <p class="headline mt-3">Jasa Lorem Ipsum Dolor Sit Amet</p>
                    <v-row>
                        <p class="ml-3">by</p>
                        <p>
                            <v-icon class="ml-3">mdi-account-circle</v-icon>
                            User A
                        </p>
                        <p class="ml-3"><v-divider vertical></v-divider></p>
                        <p class="ml-3 amber--text">Recommended Seller</p>
                        <p class="ml-3"><v-divider vertical></v-divider></p>
                        <p class="ml-3 amber--text">
                            <v-icon color="warning">mdi-star</v-icon>
                            4.5
                        </p>
                    </v-row>
                    <v-row></v-row>
                </v-col>
            </v-row>
            <v-row class="pl-12 pr-12">
                <v-col cols="12" md="7" class="pl-12 pr-12">
                    <p class="subtitle-1 font-weight-bold">Portofolio</p>
                    <v-carousel
                        cycle
                        height="500"
                        hide-delimiter-background
                        show-arrows-on-hover
                    >
                        <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                        >
                        <v-sheet
                            :color="colors[i]"
                            height="100%"
                        >
                            <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                            >
                            <div class="display-3">{{ slide }} Slide</div>
                            </v-row>
                        </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                    <p class="mt-3 subtitle-1 font-weight-bold">Deskripsi Jasa</p>
                    <p class="ma-3 subtitle text-justify grey--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="mt-3 subtitle-1 font-weight-bold">Tentang Penjual</p>
                    <v-card class="auto-mx" max-width="500">
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="title">
                                    User A
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <v-row>
                                        <p class="ml-3">Bergabung pada</p>
                                        <p class="font-weight-bold ml-2">2010</p>
                                    </v-row>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                    <v-row>
                                        <p class="ml-3">Lokasi di</p>
                                        <p class="font-weight-bold ml-2">Bandung</p>
                                    </v-row>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            <p>
                                <v-icon color="amber">mdi-star</v-icon>
                                4.5
                            </p>
                        </v-list-item>
                        <v-card-action>
                            <v-btn class="ma-3" color="primary">Kontak Penjual</v-btn>
                        </v-card-action>
                    </v-card>
                    <p class="mt-3 subtitle-1 font-weight-bold">Testimoni Pembeli</p>
                </v-col>
                <v-col cols="6" md="1"></v-col>
                <v-col col="6" md="4" class="pr-12">
                    <v-card class="mx-auto pa-5 ml-12 mt-11" max-width="500" outlined>
                        <v-row>
                            <p class="ma-3 title">Jasa A</p>
                            <v-spacer></v-spacer>
                            <p class="ma-3 title">Rp.400.000</p>
                        </v-row>
                        <v-row>
                            <p class="ma-3 subtitle text-justify grey--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </v-row>
                        <v-row class="mt-12 mb-2 mr-3 ml-3">
                            <v-btn class="mt-12" block color="success">
                                Lanjut ke Pembayaran
                            </v-btn>
                        </v-row>
                        <v-row class="mb-2 mr-3 ml-3">
                            <v-btn block>
                                Kontak Penjual
                            </v-btn>
                        </v-row>
                    </v-card>
                    <p class="title ml-12 mt-5">Jasa Serupa</p>
                    <v-divider class="ml-12"></v-divider>
                    <v-card class="ml-12 mt-5" max-width="300">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
                            <v-row>
                                <v-icon class="ml-4 mt-1" color="warning">mdi-star</v-icon>
                                <div class="black--text ml-1 mt-1">4.5</div>
                                <v-spacer></v-spacer>
                                <div class="black--text mr-4 mt-1">Rp.400.000</div>
                            </v-row>
                            </v-img>
                        <v-card-title>
                            Lorem Ipsum
                        </v-card-title>
                    </v-card>
                    <v-card class="ml-12 mt-5" max-width="300">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
                            <v-row>
                                <v-icon class="ml-4 mt-1" color="warning">mdi-star</v-icon>
                                <div class="black--text ml-1 mt-1">4.5</div>
                                <v-spacer></v-spacer>
                                <div class="black--text mr-4 mt-1">Rp.400.000</div>
                            </v-row>
                            </v-img>
                        <v-card-title>
                            Lorem Ipsum
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import NavbarUser from '../components/NavbarUser'

  export default {

    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },

    components: {
        NavbarUser
    }
  }
</script>