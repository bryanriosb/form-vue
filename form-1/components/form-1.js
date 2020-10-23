Vue.component("form-1", {
  data() {
    return {
  
      step: 1,
      form: {

        isValid: null,
        mediHistoryData: null,
        mediInfoData: null,
        rehabInfoData: null,
        rehabInfo2Data: null,
        rehabInfo3Data: null,
        rehabInfo4Data: null,
        ocupationalHistData: null,
        ocupationalHist2Data: null,
        ocupationalHist3Data: null,
        authorizationAcknowData: null
      }
      
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
          return "REHAB INFORMATION";
        case 5:
          return "REHAB INFORMATION";
        case 6:
          return "REHAB INFORMATION";
        case 7:
          return "OCUPATIONAL HISTORY";
        case 8:
          return "OCUPATIONAL HISTORY";
        case 9:
          return "OCUPATIONAL HISTORY";    
        default:
          return "AUTHORIZATIONS & ACKNOWLEDGEMENTS";
      }
    }
  },
  methods: {
    showForm() {

      const res = this.$refs.form.validate();

      if(res) {

        console.log('Fomulario', this.form);
        
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
            <medical-histoy @medicalHistory="form.mediHistoryData= $event"></medical-histoy>
          </v-window-item>
    
          <v-window-item :value="2">
            <medical-information @medicalInformation="form.mediInfoData= $event"></medical-information>
          </v-window-item>
    
          <v-window-item :value="3">
            <rehab-information @rehabInformation="form.rehabInfoData= $event"></rehab-information>
          </v-window-item>

          <v-window-item :value="4">
            <rehab-information-2 @rehabInformation2="form.rehabInfo2Data= $event"></rehab-information-2>
          </v-window-item>

          <v-window-item :value="5">
            <rehab-information-3 @rehabInformation3="form.rehabInfo3Data= $event"></rehab-information-3>
          </v-window-item>

          <v-window-item :value="6">
            <rehab-information-4 @rehabInformation4="form.rehabInfo4Data= $event"></rehab-information-4>
          </v-window-item>
          
          <v-window-item :value="7">
            <ocupational-history @ocupationalHistory="form.ocupationalHistData= $event"></ocupational-history>
          </v-window-item>

          <v-window-item :value="8">
            <ocupational-history-2 @ocupationalHistory2="form.ocupationalHist2Data= $event"></ocupational-history-2>
          </v-window-item>

          <v-window-item :value="9">
            <ocupational-history-3 @ocupationalHistory3="form.ocupationalHist3Data= $event"></ocupational-history-3>
          </v-window-item>

          <v-window-item :value="10">
            <autho-acknow @authorizationAcknow="form.authorizationAcknowData= $event"></autho-acknow>
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
          <v-btn v-if="step === 10" depressed @click="showForm()" :disabled="!form.isValid" color="primary">
            SEND FORM
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="step === 10"
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
                  <form-1></form-1>
              </v-container>
          </v-main>
      </v-app>
    `
});
