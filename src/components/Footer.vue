<template>
    <v-footer
        dark
        padless
        color="blue-grey darken-2">
        <v-col
            class="text-left"
            cols="2">
            <p class="title">LANCE</p>
        </v-col>
        <v-col 
            cols="5"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-black">
                        Kategori
                    </v-list-item-title>
                    <v-list-item-subtitle>
                            <v-btn text small>Musik</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                            <v-btn text small>Programming</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                            <v-btn text small>Translating</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                            <v-btn text small>Writing</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                            <v-btn text small>Desain</v-btn>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-col>
        <v-col
            cols="5"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-black">
                        About
                    </v-list-item-title>
                    <v-list-item-subtitle>
                            <v-btn text small>Privacy Policy</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                            <v-btn text small>Terms of Services</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-title class="font-weight-black">
                        Support
                    </v-list-item-title>
                    <v-list-item-subtitle>
                            <v-btn text small>Help and Support</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                            <v-btn text small>Trust and Safety</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                            <v-btn text small>FAQ</v-btn>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {

        }
    }
}
</script>