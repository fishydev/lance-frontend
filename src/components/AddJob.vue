<template>
    <v-dialog
        v-model="addJobDialog" persistent
        max-width="80%">
        <template v-slot:activator= "{ on }">
            <v-btn color="primary" v-on="on">Add Job</v-btn>
        </template>
        <v-card>
            <v-form
                id="addjob_form"
                ref="form_addjob"
                class="px-4"
                @submit.prevent="postJob">
                <v-card-title>Add a Job</v-card-title>
                <p>Beri judul jasa</p>
                <v-text-field
                    v-model="jobTitle"
                    label="Judul"
                    filled>
                </v-text-field>
                <p>Deskripsikan jasamu sejelas mungkin.</p>
                <v-text-field
                    v-model="jobDesc"
                    label="Deskripsi Jasa"
                    placeholder="Isi deskripsi jasamu"
                    filled>                    
                </v-text-field>
                <p>Pilih kategori jasa</p>
                <v-select
                    v-model="jobCat"
                    :items="categories"
                    filled
                    label="Kategori Jasa">
                </v-select>
                <p>Masukkan harga</p>
                <v-text-field
                    v-model="jobFee"
                    label="Harga Jasa"
                    placeholder="Masukkan harga jasamu"
                    filled>
                </v-text-field>
                <v-card-action>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn class="mx-4" color="yellow" @click="addJobDialog = false">Close</v-btn>
                        <v-btn
                            class="mr-4"
                            color="blue"
                            @click="addJobDialog = false"
                            type="submit"
                            form="addjob_form">Submit</v-btn>
                    </v-row>
                </v-card-action>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddJobDialog',
    data: () => ({
        addJobDialog: false,
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

        modelJob: {
            title: '',
            desc: '',
            category: '',
            email: '',
            fee: ''
        },

        postJob: {
            success: false,
            msg: ''
        }
    }),

    methods: {
        postJob () {
            if (this.$refs.form_addjob.validate()) {
                var dataJob = {
                    title: this.modelJob.title,
                    desc: this.modelJob.desc,
                    category: this.modelJob.category,
                    email: this.modelJob.email,
                    fee: this.modelJob.fee
                }

                axios.post('https://lance-be.herokuapp.com/jobs/post', dataJob).then((res) => {
                    if (res.status == 200) {
                        this.addJobDialog = false
                    } else {
                        this.postJob.msg = res.msg
                    }
                })
            }
        }
    }
}
</script>