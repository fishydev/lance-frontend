<template>
    <div>
        <NavbarUser />
            <v-container class="pt-8">
                <v-row no-gutters>
                    <v-col cols="12" :md="5" :sm="12">
                        <v-card class="mx-auto" max-width="344" outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4"></div>
                                    <v-list-item-subtitle>
                                        <v-row justify="center">
                                            <v-avatar size="100">
                                                <v-img 
                                                dark
                                                src="@/assets/ProfileIcon.png"
                                                >
                                                </v-img>
                                            </v-avatar>
                                        </v-row>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-row justify="center">
                                            <p class="subtitle-1">User A</p>
                                        </v-row>
                                        <v-divider class="ma-2"></v-divider>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-row justify="center">
                                            <AddJobDialog />
                                        </v-row>
                                    </v-list-item-subtitle>
                                    <v-container>
                                        <v-row justify="center">
                                    </v-row>
                                    </v-container>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                    <v-col cols="12" :md="7" :sm="12">
                        <p class="title font-weight-bold">News</p>
                        <v-carousel
                            cycle
                            height="250"
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
                    </v-col>
                </v-row>
                <v-row class="ml-sm-4 ml-md-12">
                    <p class="mt-12 pl-4 title font-weight-bold">Jasa Populer</p>
                </v-row>
                <v-row class="ml-sm-4 ml-md-12">
                    <v-slide-group  show-arrows mx-auto>
                        <v-slide-item v-for="n in 9" :key="n">
                            <v-card class="ma-4" href="/jobpage">
                                <v-img src="https://picsum.photos/seed/picsum/300/200">
                                    <v-row>
                                        <v-icon class="ml-4 mt-1" color="warning">mdi-star</v-icon>
                                        <div class="black--text ml-1 mt-1">4.5</div>
                                        <v-spacer></v-spacer>
                                        <div class="black--text mr-4 mt-1">Rp.400.000</div>
                                    </v-row>
                                </v-img>
                                <v-card-subtitle>Lorem Ipsum</v-card-subtitle>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-row>
                <v-row class="ml-sm-4 ml-md-12">
                    <p class="mt-12 pl-4 title font-weight-bold">Jasa Berdasarkan Preferensimu</p>
                </v-row>
                <v-row class="ml-sm-4 ml-md-12">
                    <v-slide-group show-arrows mx-auto>
                        <v-slide-item v-for="n in 9" :key="n">
                            <v-card class="ma-4" href="/jobpage">
                                <v-img src="https://picsum.photos/seed/picsum/300/200">
                                    <v-row>
                                        <v-icon class="ml-4 mt-1" color="warning">mdi-star</v-icon>
                                        <div class="black--text ml-1 mt-1">4.5</div>
                                        <v-spacer></v-spacer>
                                        <div class="black--text mr-4 mt-1">Rp.400.000</div>
                                    </v-row>
                                </v-img>
                                <v-card-subtitle>Lorem Ipsum</v-card-subtitle>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-row>
            </v-container>
    </div>
</template>

<script>
import NavbarUser from '../components/NavbarUser'
import AddJobDialog from '../components/AddJob'

  export default {
    components : {
        NavbarUser, AddJobDialog
    },

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
  }
</script>