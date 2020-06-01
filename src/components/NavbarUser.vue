<template>
    <div>
        <v-toolbar
            color="grey lighten 2"
            flat
            dense>
            <v-btn class="mr-4" @click.stop="drawerNav = !drawerNav">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title>LANCE</v-toolbar-title>
            <v-text-field
            class="ml-12 mt-6"
            prepend-inner-icon="mdi-magnify"
            flat
            outlined
            background-color="white"
            color="grey"
            dense></v-text-field>
            <v-btn class="ml-2">Search</v-btn>
            <v-spacer></v-spacer>
            <v-btn text large href="/category">Category</v-btn>
            <v-btn text large>Messages</v-btn>
            <v-btn text large>Favorites</v-btn>
            <v-btn text large>Orders</v-btn>
            <v-btn tile icon href="/profile">
                <v-icon x-large>mdi-account-circle</v-icon>
            </v-btn>
        </v-toolbar>
        <!-- Navigation drawer -->
        <v-navigation-drawer
            v-model="drawerNav"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <p class="title font-weight-bold">Menu</p>
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-3">
                        <v-row justify="center">
                            <v-avatar size="100">
                                <v-img 
                                    dark
                                    src="@/assets/ProfileIcon.png"
                                ></v-img>
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
                            <v-btn>Tambah Jasa</v-btn>
                        </v-row>
                        <v-divider class="ma-3"></v-divider>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                        <v-text-field
                        class="mt-2"
                            outlined
                            label="Search"
                            prepend-inner-icon="mdi-magnify"
                        ></v-text-field>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
   data () {
       return {
           drawerNav: null,
           items: [
               {title: 'Kategori', icon: 'mdi-apps'},
               {title: 'Messages', icon: 'mdi-message'},
               {title: 'Favorites', icon: 'mdi-star'},
               {title: 'Order', icon: 'mdi-cart'},
               {title: 'logout', icon: 'mdi-logout'}
           ]
       }
   },
}
</script>