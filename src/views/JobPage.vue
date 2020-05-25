<template>
    <div>
        <v-toolbar
            color="grey lighten 2"
            flat
            dense
            >
                <v-toolbar-title>LANCE</v-toolbar-title>
                <v-text-field
                class="ml-4 mt-4"
                append-outer-icon="mdi-magnify"
                flat
                dense
                >
                    </v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn text large>Category</v-btn>
                    <v-btn text large>Messages</v-btn>
                    <v-btn text large>Favorites</v-btn>
                    <v-btn text large>Orders</v-btn>
                    <v-btn tile icon>
                        <v-icon x-large>mdi-account-circle</v-icon>
                    </v-btn>
            </v-toolbar>
            <v-container>
                <v-row>
                    <v-col cols="12">
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
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="7">
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
                        <p></p>
                    </v-col>
                    <v-col>
                        
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>

<script>

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
  }
</script>