<template>
  <div>
    <v-app-bar
      color="grey lighten 2"
      dense
      dark
    >
      <v-toolbar-title>LANCE</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="blue-grey darken-4">
        About
      </v-btn>
      <v-btn text color="blue-grey darken-4" @click="overlayLogin = !overlayLogin">
        Sign In
      </v-btn>
      <v-btn color="blue-grey darken-4" @click="overlayRegister = !overlayRegister">
        JOIN
      </v-btn>
    </v-app-bar>
    <v-card
      class="mx-auto"
      color="grey lighten 2"
      flat
      tile
    >  
    </v-card>
    <!-- OverlayLogin -->
    <v-overlay :value="overlayLogin">
      <v-card class="mx-5" outlined light>
        <v-toolbar dense flat>
          <v-toolbar-title>Sign in to LANCE</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text @click="overlayLogin = !overlayLogin" :ripple="false">
            <v-icon right>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="pb-0">
          <v-form>
            <v-text-field label="Email" name="regist_email" type="email" outlined>
            </v-text-field>
            <v-text-field label="Password" name="regist_password" type="password" outlined>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn block depressed>Sign In</v-btn>
        </v-card-actions>
        <v-card-text class="pb-0">
          <p class="text-center">By Signing in, you agree to LANCE's Terms of Service</p>
        </v-card-text>
      </v-card>
    </v-overlay>
    <!-- Overlay register -->
    <v-overlay :value="overlayRegister">
      <v-card class="mx-5" outlined light>
        <v-toolbar dense flat>
          <v-toolbar-title>Create Account</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text @click="overlayRegister = !overlayRegister" :ripple="false">
            <v-icon right>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="pb-0">
          <v-form>
            <v-text-field label="Email" name="regist_email" type="email" outlined>
            </v-text-field>
            <v-text-field label="Password" name="regist_password" type="password" outlined>
            </v-text-field>
            <v-text-field label="Confirm Password" name="regist_confirm-password" type="password" outlined>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn block depressed>Register</v-btn>
        </v-card-actions>
        <v-card-text class="pb-0">
          <p class="text-center">By creating an account, you agree to LANCE's Terms of Service</p>
        </v-card-text>
      </v-card>
    </v-overlay>     
  </div>
</template>

<script>
  export default {
    data: () => ({
      overlayRegister: false,
      overlayLogin: false,
    }),
  }
</script>