<template>
        <div>
            <NavbarUser />
            <v-container>
                <v-row>
                    <v-col cols="6" md="4" sm="6">
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
                                            <v-btn class="mx-4" color="error" @click="logOut()">
                                                Log Out
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
                    <v-col cols="12" md="7" sm="12">
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
                                                <v-list-item-subtitle>
                                                    <v-row justify="center">
                                                        <p class="title font-weight-regular white--text">
                                                            Daftarkan jasa anda dengan menekan tombol dibawah ini
                                                        </p>
                                                    </v-row>
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle>
                                                    <v-row justify="center">
                                                        <AddJobDialog />
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
                    <v-col cols="6" md="4" sm="6">
                        <v-card class="mx-auto" max-width="344" outlined>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Description</p>
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small @click="overlayDesc = !overlayDesc">
                                                    Add Description
                                                </v-btn>
                                                <v-textarea
                                                    name="inputDescription"
                                                    value=""
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
                                        <!-- Overlay Desc -->
                                        <v-overlay :value="overlayDesc">
                                            <v-card class="mx-auto" max-width="1000" outlined light>
                                                <v-toolbar dense flat>
                                                    <v-toolbar-title>Add Description</v-toolbar-title>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        @click="overlayDesc = !overlayDesc"
                                                        :ripple="false"
                                                    >
                                                        <v-icon right>mdi-close</v-icon>
                                                    </v-btn>
                                                </v-toolbar>
                                                <v-divider></v-divider>
                                                <v-card-text class="pb-0">
                                                    <v-form>
                                                        <v-textarea
                                                            auto-grow
                                                            outlined
                                                            label="Add Description"
                                                            rows="4"
                                                        ></v-textarea>
                                                    </v-form>
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-row justify="center">
                                                        <v-btn color="primary" class="ma-2">
                                                            Add Description
                                                        </v-btn>
                                                    </v-row>
                                                </v-card-action>
                                            </v-card>
                                        </v-overlay>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Languages</p>
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small @click="overlayLang = !overlayLang">
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
                                        <!-- Overlay Lang -->
                                        <v-overlay :value="overlayLang">
                                            <v-card class="mx-5" outlined light>
                                                <v-toolbar dense flat>
                                                    <v-toolbar-title>Add languages</v-toolbar-title>
                                                    <v-spacer></v-spacer>
                                                    <v-btn 
                                                        text 
                                                        @click="overlayLang = !overlayLang" 
                                                        :ripple="false"
                                                    >
                                                        <v-icon right>mdi-close</v-icon>
                                                    </v-btn>
                                                </v-toolbar>
                                                <v-divider></v-divider>
                                                <v-card-text class="pb-0">
                                                    <v-form>
                                                        <v-text-field label="Add Languages" outlined></v-text-field>
                                                    </v-form>
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-row justify="center">
                                                        <v-btn class="ma-2" color="primary">Add Languages</v-btn>
                                                    </v-row>
                                                </v-card-action>
                                            </v-card>
                                        </v-overlay>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Skill</p>
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small @click="overlaySkill = !overlaySkill">
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
                                        <!-- Overlay Skill -->
                                        <v-overlay :value="overlaySkill">
                                            <v-card class="mx-5" otlined light>
                                                <v-toolbar dense flat>
                                                    <v-toolbar-title>Add Skill</v-toolbar-title>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text 
                                                        @click="overlaySkill = !overlaySkill"
                                                        :ripple="false"
                                                    >
                                                        <v-icon right>mdi-close</v-icon>
                                                    </v-btn>
                                                </v-toolbar>
                                                <v-divider></v-divider>
                                                <v-card-text class="pb-0">
                                                    <v-form>
                                                        <v-text-field label="Add Skill" outlined></v-text-field>
                                                    </v-form>
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-row justify="center">
                                                        <v-btn class="ma-2" color="primary">Add Skill</v-btn>
                                                    </v-row>
                                                </v-card-action>
                                            </v-card>
                                        </v-overlay>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Education</p>
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small @click="overlayEdu = !overlayEdu">
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
                                        <!-- Overlay Edu -->
                                        <v-overlay :value="overlayEdu">
                                            <v-card class="mx-5" outlined light>
                                                <v-toolbar dense flat>
                                                    <v-toolbar-title>Add Education</v-toolbar-title>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        @click="overlayEdu = !overlayEdu"
                                                        :ripple="false"
                                                    >
                                                        <v-icon right>mdi-close</v-icon>
                                                    </v-btn>
                                                </v-toolbar>
                                                <v-divider></v-divider>
                                                <v-card-text class="pb-0">
                                                    <v-form>
                                                        <v-text-field label="Add Education" outlined></v-text-field>
                                                        <v-text-field label="Add Year" outlined></v-text-field>
                                                    </v-form>
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-row justify="center">
                                                        <v-btn class="ma-2" color="primary">Add Education</v-btn>
                                                    </v-row>
                                                </v-card-action>
                                            </v-card>
                                        </v-overlay>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-container>
                                            <v-row>
                                                <p>Certification</p>
                                                <v-spacer></v-spacer>
                                                <v-btn text x-small @click="overlayCert = !overlayCert">
                                                    Add New
                                                </v-btn>
                                                <v-textarea
                                                    name="inputSertification"
                                                    value=""
                                                    label="Certification"
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
                                        <!-- Overlay Cert -->
                                        <v-overlay :value="overlayCert">
                                            <v-card class="mx-5" outlined light>
                                                <v-toolbar dense flat>
                                                    <v-toolbar-title>Add Certification</v-toolbar-title>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        @click="overlayCert = !overlayCert"
                                                        :ripple="false"
                                                    >
                                                        <v-icon right>mdi-close</v-icon>
                                                    </v-btn>
                                                </v-toolbar>
                                                <v-divider></v-divider>
                                                <v-card-text class="pb-0">
                                                    <v-form>
                                                        <v-text-field label="Add Certification Name" outlined></v-text-field>
                                                        <v-text-field label="Add Year" outlined></v-text-field>
                                                        <v-text-field label="Add Credential URL" outlined=""></v-text-field>
                                                    </v-form>
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-row justify="center">
                                                        <v-btn class="ma-2" color="primary">Add Certification</v-btn>
                                                    </v-row>
                                                </v-card-action>
                                            </v-card>
                                        </v-overlay>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
</template>

<script>
import NavbarUser from '../components/NavbarUser'
import AddJobDialog from '../components/AddJob'

export default {
    data:() => ({
        overlayDesc:false,
        overlayLang:false,
        overlaySkill:false,
        overlayEdu:false,
        overlayCert:false,
    }),
    components: {
        NavbarUser, AddJobDialog
    },

    methods: {
        logOut () {
            localStorage.removeItem("token")
            localStorage.removeItem("email")
            localStorage.removeItem("isAuth")
            this.$router.push({ name: 'Homepage' })
        }
    }
}
</script>