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
        <v-container class="pa-12 ma-12">
            <v-card class="mx-auto" max-width="1000">
                <v-card-title>
                    <p class="display-1">Update Profile Information</p>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-subtitle>
                    <p class="title">Full name</p>
                </v-card-subtitle>
                <v-row justify="center">
                    <v-col cols="12" md="5">
                        <v-text-field
                            label="First Name"
                            single-line
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5">
                        <v-text-field
                            label="Last Name"
                            single-line
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-card-subtitle>
                    <p class="title">User Name</p>
                </v-card-subtitle>
                <v-row justify="center">
                    <v-col cols="12" md="10">
                        <v-text-field
                            label="Username"
                            single-line
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-card-subtitle>
                    <p class="title">Location</p>
                </v-card-subtitle>
                <v-row justify="center">
                    <v-col cols="12" md="6">
                        Address
                        <v-text-field
                            label="Address"
                            single-line
                            outlined
                            prepend-inner-icon="mdi-map-marker"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        City
                        <v-text-field
                            label="City"
                            single-line
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-card-subtitle>
                    <p class="title">University</p>
                </v-card-subtitle>
                <v-row class="ml-12 pl-8">
                    <v-col cols="12" md="5">
                        <v-overflow-btn
                            class="my-2"
                            :items="university"
                            label="Universitas"
                            editable
                            item-value="text"
                        ></v-overflow-btn>
                    </v-col>
                </v-row>
                <v-card-subtitle>
                    <p class="title">Email</p>
                </v-card-subtitle>
                <v-row justify="center">
                    <v-col cols="12" md="10">
                        <v-text-field
                            label="Email"
                            single-line
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-card-subtitle>
                    <p class="title">Password</p>
                </v-card-subtitle>
                <v-row justify="center">
                    <v-col cols="12" md="5">
                        Password
                        <v-text-field
                            label="Password"
                            single-line
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5">
                        Confirm Password
                        <v-text-field
                            label="Confirm Password"
                            single-line
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>    
                <v-row justify="center">
                    <v-btn color="success mb-5">
                        Save
                    </v-btn>
                </v-row>
            </v-card>   
        </v-container>
    </div>
</template>

<script>
  export default {
    data: () => ({
      university: [
        { text: 'Universitas A' },
        { text: 'Universitas B' },
        { text: 'Universitas C' },
        { text: 'Universitas D' },
        { text: 'Universitas F' },
      ],
    }),
  }
</script>