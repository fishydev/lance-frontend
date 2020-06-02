<template>
    <div>
        <NavbarUser />
            <v-container class="pt-12 mt-12">
                <v-row>
                    <v-col cols="6" md="4">
                        <v-card class="mx-auto pa-3" max-width="300">
                            <v-card-title>
                                All Category
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-row v-for="category in categories" :key="category.name">
                                <v-btn class="ma-2" rounded color="primary">
                                    {{ category.name }}
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-2">
                                    {{ randNum() }}
                                </v-chip>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-row>
                            <p class="mr-2">Category</p>
                            <p class="blue-grey--text font-weight-bold">None</p>
                        </v-row>
                        <v-card
                            class="d-flex flex-column ma-4"
                            v-for="res in results"
                            :key="res._id"
                            href="/jobpage">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
                                <v-row>
                                    <v-icon class="ml-4 mt-1" color="warning">mdi-star</v-icon>
                                    <div class="black--text ml-1 mt-1">4.5</div>
                                    <v-spacer></v-spacer>
                                    <div class="black--text mr-4 mt-1">Rp{{ res.fee }}</div>
                                </v-row>
                            </v-img>
                            <v-card-title>
                                {{ res.title }}
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>

<script>
import NavbarUser from '../components/NavbarUser'
import axios from 'axios'

export default {
    components: {
        NavbarUser
    },

    data: () => ({
        categories: [
            { name: 'Kategori A' },
            { name: 'Kategori B' },
            { name: 'Kategori C' },
            { name: 'Kategori D' },
            { name: 'Kategori E' },
            { name: 'Kategori F' },
            { name: 'Kategori G' },
            { name: 'Kategori H' },
            { name: 'Kategori I' }
        ],

        results: []
    }),

    mounted () {
        axios.get("https://lance-be.herokuapp.com/jobs/all").then((res) => {
            this.results = res.data
        })
    },

    methods: {
        randNum: () => {
            return Math.ceil(Math.random()*10)
        }
    }
}
</script>