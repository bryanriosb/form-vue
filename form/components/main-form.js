Vue.component("main-form", {
  data() {
    return {
      step: 1,
      mediHistoryData: null,
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "MEDICAL HISTORY";
        case 2:
          return "MEDICAL INFORMATION";
        case 3:
          return "REHAB INFORMATION";
        case 4:
          return "OCUPATIONAL HISTORY";
        default:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";
      }
    },
  },

  template: /*html*/ `
    <v-card  id="main-form" height="100%" class="mx-auto" elevation="2"  outlined  max-width="1100">
  
      <center>  
        <div id="logo">
          <img width="320px" src="/assets/img/body-hack.png" alt="image/png">
        </div>
      </center>
      
      <v-card-title class="mx-auto">
      
        <span id="title-label">{{ currentTitle }}</span>
  
        <v-avatar color="primary lighten-2" class="subheading white--text"
        size="24" v-text="step" ></v-avatar>
      
      </v-card-title>
  
      <v-window v-model="step">
  
        <v-window-item :value="1">
          <medical-histoy @medicalHistory="mediHistoryData = $event"></medical-histoy>
        </v-window-item>
  
        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              outlined
              label="Password"
              type="password"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              type="password"
            ></v-text-field>
            <span class="caption grey--text text--darken-1">
              Please enter a password for your account
            </span>
          </v-card-text>
        </v-window-item>
  
        <v-window-item :value="3">
          <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="title font-weight-light mb-2">
              Welcome to Vuetify
              </h3>
              <span class="caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
        <v-window-item :value="4">
          <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="title font-weight-light mb-2">
              Welcome to Vuetify
              </h3>
              <span class="caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
        <v-window-item :value="5">
          <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="title font-weight-light mb-2">
              Welcome to Vuetify
              </h3>
              <span class="caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
      </v-window>
  
        <v-divider></v-divider>
  
      <v-card-actions>
        <v-btn
          :disabled="step === 1"
          text
          @click="step--"
        >
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="step === 5"
          color="primary"
          depressed
          @click="step++"
        >
          Next
        </v-btn>
      </v-card-actions>
  
    </v-card>
  
  `,
});

new Vue({
    el: '#app',
    vuetify: new Vuetify({
      theme: {
        themes: {
          light: {
            primary: '#E9521D',
            secondary: '#FA8072', 
            accent: '#FFA07A', 
          },
        },
      },
    }),
    template: `
      <v-app>
          <v-main>       
              <v-container>
                  <main-form></main-form>
              </v-container>
          </v-main>
      </v-app>
    `
});