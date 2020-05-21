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
            <v-container class="pt-12 mt-12">
                <v-row>
                    <v-col cols="6" md="4">
                        <v-card class="mx-auto pa-3" max-width="300">
                            <v-card-title>
                                All Category
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori A
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    1
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori B
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori C
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori D
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori E
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori F
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori G
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori H
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori I
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori J
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori K
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori L
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                            <v-row>
                                <v-btn class="ma-2" rounded color="primary">
                                    Kategori M
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    10
                                </v-chip>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-row>
                            <p class="mr-2">Category</p>
                            <p class="blue-grey--text font-weight-bold">Category A</p>
                        </v-row>
                        <v-row>
                            <v-card class="ma-4" max-width="300">
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
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>