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
                </v-row>
            </v-container>
    </div>
</template>