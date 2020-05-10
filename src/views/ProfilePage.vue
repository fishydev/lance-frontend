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
                                    <div class="overline mb-4">PROFILE</div>
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
                                                Edit Profile
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
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-card
                            class="pa-2"
                            outlined
                            tile
                        >
                            <v-img 
                                dark 
                                src="@/assets/ProfileBanner.jpg"
                            >
                                <v-layout fill-height align-center pa-3>
                                    <v-flex class="d-flex flex-column align-center">
                                        <v-list-item three-line>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <v-row justify="center">
                                                        <p class="headline font-weight-medium white--text">
                                                            Mari Daftarkan Jasa Anda
                                                        </p>
                                                    </v-row>
                                                </v-list-item-title>
                                                <v-list-item-susbtitle>
                                                    <v-row justify="center">
                                                        <p class="title font-weight-regular white--text">
                                                            Daftarkan jasa anda dengan menekan tombol dibawah ini
                                                        </p>
                                                    </v-row>
                                                </v-list-item-susbtitle>
                                                <v-list-item-subtitle>
                                                    <v-row justify="center">
                                                        <v-btn large>
                                                            Mulai
                                                        </v-btn>
                                                    </v-row>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>                                    
                                    </v-flex>
                                </v-layout>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="6" md="4">
                        <v-card class="mx-auto" max-width="344" outlined>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Description</p>
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small>
                                                    Add Description
                                                </v-btn>
                                                <v-textarea
                                                    name="inputDescription"
                                                    value="Isi deskripsi anda untuk menarik minat pelanggan"
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
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small>
                                                    Add New
                                                </v-btn>
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
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small>
                                                    Add New
                                                </v-btn>
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
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small>
                                                    Add New
                                                </v-btn>
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
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small>
                                                    Add New
                                                </v-btn>
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
                </v-row>
            </v-container>
        </div>
</template>