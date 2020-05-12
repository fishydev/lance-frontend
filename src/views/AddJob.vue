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
        <div class="ma-12 pt-12 pl-12">
            <v-row>
                <p class="title black--text">Jasa Apa Yang Ingin Kamu Tambahkan?</p>
            </v-row>
            <v-row>
                <p class="subtitle">Deskripsikan Jasamu Sejelas Mungkin Agar Pembeli Tertarik Membeli</p>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-textarea
                    outlined
                    name="inputJasa"
                    label="Deskripsi Jasa"
                    value="Isi deskripsi jasamu"
                    ></v-textarea>
                </v-col>                
            </v-row>
            <v-row>
                <p class="subtitle">Tambahkan Foto/ File Pendukung Terkait Jasamu</p>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-file-input accept="image/*" label="File input"></v-file-input>
                </v-col>
            </v-row>
            <v-row>
                <p class="subtitle">Pilih Kategori Jasamu</p>
            </v-row>
            <v-row>
                <v-col cols="6" md="2"> 
                    <v-overflow-btn
                    class="my-2"
                    :items="dropdown_font"
                    label="Kategori"
                    target="#dropdown-example"
                    ></v-overflow-btn>
                </v-col>
            </v-row>
            <v-row>
                <p class="subtitle">Masukan Harga Jasamu (dalam rupiah)</p>
            </v-row>
            <v-row>
                <v-col cols="6" md="2">
                    <v-text-field
                        label="Harga"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <p class="subtitle">Post Jasamu Sekarang</p>
            </v-row>
            <v-row>
                <v-btn color="success">
                    POST
                    <v-icon>mdi-upload</v-icon>
                </v-btn>
            </v-row>
        </div>
    </div>
</template>