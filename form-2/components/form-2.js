Vue.component("form-2", {
  data() {
    return {
  
      step: 1,
      form: {

        isValid: null,
        commerInsuranceData: null,
        commerInsurance2Data: null,
        commerInsurance3Data: null,
        commerInsurance4Data: null,
        commerInsurance5Data: null,
        commerInsurance6Data: null,
        commerInsurance7Data: null

      }
      
    };
  },
  computed: {
    
    currentTitle() {
      switch (this.step) {
      
        case 1:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 2:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 3:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 4:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 5:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 6:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 7:
        return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";
    
        default:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";
      }
    }
  },
  methods: {
    showForm() {

      const res = this.$refs.form.validate();

      if(res) {

        console.log('Fomulario-2 ', this.form);
        
      } else {
        alert('Some fields need to be filled!');
      }

    }
  },
  template: /*html*/ `
  
    <v-card  id="main-form" height="100%" class="mx-auto" elevation="2"  outlined  max-width="1100">

      <div class="back-logo">
        <img class="img-bh" src="assets/img/bh.png" alt="image/png">
      </div>
  
      <center>  
        <div id="logo">
          <img width="320px" src="/assets/img/body-hack.png" alt="image/png">
        </div>
      </center>
      
      <v-card-title class="mx-auto">
      
        <span id="title-label">{{ currentTitle }}</span>
  
        <v-avatar color="avatar primary lighten-2" class="subheading white--text"
        size="28" v-text="step"
        ></v-avatar>
      
      </v-card-title>


      <v-form
        ref="form"
        v-model="form.isValid"
        lazy-validation
      >
      
        <v-window v-model="step">
    
          <v-window-item :value="1">
            <commercial-insurance @commercilaInsurance="form.commerInsuranceData= $event"></commercial-insurance>
          </v-window-item>

          <v-window-item :value="2">
            <commercial-insurance-2 @commercialInsurance2="form.commerInsurance2Data= $event"></commercial-insurance-2>
          </v-window-item>

          <v-window-item :value="3">
            <commercial-insurance-3 @commercialInsurance3="form.commerInsurance3Data= $event"></commercial-insurance-3>
          </v-window-item>

          <v-window-item :value="4">
            <commercial-insurance-4 @commercialInsurance4="form.commerInsurance4Data= $event"></commercial-insurance-4>
          </v-window-item>

          <v-window-item :value="5">
            <commercial-insurance-5 @commercialInsurance5="form.commerInsurance5Data= $event"></commercial-insurance-5>
          </v-window-item>

          <v-window-item :value="6">
            <commercial-insurance-6 @commercialInsurance6="form.commerInsurance6Data= $event"></commercial-insurance-6>
          </v-window-item>

          <v-window-item :value="7">
            <commercial-insurance-7 @commercialInsurance7="form.commerInsurance7Data= $event"></commercial-insurance-7>
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
          <v-btn v-if="step === 7" depressed @click="showForm()" :disabled="!form.isValid" color="primary">
            SEND FORM
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="step === 7"
            color="primary"
            depressed
            @click="step++"
          >
            Next
          </v-btn>

        </v-card-actions>

      </v-form>
  
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
                  <form-2></form-2>
              </v-container>
          </v-main>
      </v-app>
    `
});
