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
                                    <div class="overline mb-4">Tentang Penjual</div>
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
                                            <p class="subtitle-1">Penjual A</p>
                                        </v-row>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-row justify="center">
                                            <v-btn>
                                                Contact Seller
                                            </v-btn>
                                        </v-row>
                                    </v-list-item-subtitle>
                                    <v-container>
                                        <v-row justify="center">
                                        <v-divider></v-divider>
                                    </v-row>
                                    </v-container>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>
                                                    <v-icon small>mdi-home-map-marker</v-icon>
                                                    Location
                                                </p>
                                                <v-spacer></v-spacer>
                                                <p class="text-right font-weight-bold">
                                                    Bandung
                                                </p>
                                                </v-row>
                                                <v-row>
                                                <p>
                                                    <v-icon small>mdi-account</v-icon>
                                                    Member since
                                                </p>
                                                <v-spacer></v-spacer>
                                                <p class="text-right font-weight-bold">
                                                    2020
                                                </p>
                                            </v-row>
                                        </v-container>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                        <v-card class="mx-auto mt-5" max-width="344" outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-0">PORTOFOLIO</div>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                        <v-card class="mx-auto mt-5" max-width="344" outlined>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Description</p>
                                            </v-row>
                                            <v-row>
                                                <v-textarea
                                                    name="inputDescription"
                                                    label="Description"
                                                    filled
                                                    auto-grow
                                                    disabled
                                                >
                                                </v-textarea>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-divider></v-divider>
                                            </v-row>
                                        </v-container>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Languages</p>
                                            </v-row>
                                            <v-row>
                                                <v-textarea
                                                    name="inputLanguages"
                                                    value=""
                                                    label="Languages"
                                                    filled
                                                    auto-grow
                                                    disabled
                                                >
                                                </v-textarea>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-divider></v-divider>
                                            </v-row>
                                        </v-container>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Skill</p>
                                            </v-row>
                                            <v-row>
                                                <v-textarea
                                                    name="inputSkill"
                                                    value=""
                                                    label="Skill"
                                                    filled
                                                    auto-grow
                                                    disabled
                                                >
                                                </v-textarea>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-divider></v-divider>
                                            </v-row>
                                        </v-container>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Education</p>
                                            </v-row>
                                            <v-row>
                                                <v-textarea
                                                    name="inputEducation"
                                                    value=""
                                                    label="Education"
                                                    filled
                                                    auto-grow
                                                    disabled
                                                >
                                                </v-textarea>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-divider></v-divider>
                                            </v-row>
                                        </v-container>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Sertification</p>
                                            </v-row>
                                            <v-row>
                                                <v-textarea
                                                    name="inputSertification"
                                                    value=""
                                                    label="Sertification"
                                                    filled
                                                    auto-grow
                                                    disabled
                                                >
                                                </v-textarea>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-divider></v-divider>
                                            </v-row>
                                        </v-container>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-row>
                            <p class="title">Jasa yang Dijual</p>
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
                        <v-row class="mt-12">
                            <p class="title">Review Penjual</p>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>