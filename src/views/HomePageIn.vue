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
                    <v-col cols="6" md="4">
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
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-row justify="center">
                                            <v-btn>
                                                Tambah Jasa
                                            </v-btn>
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
                    <v-col cols="12" md="7">
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