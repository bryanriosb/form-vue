Vue.component("main-form", {
  data() {
    return {
      step: 1,
      mediHistoryData: null,
      mediInfoData: null,
      rehabInfoData: null,
      rehabInfo2Data: null,
      rehabInfo3Data: null,
      rehabInfo4Data: null,
      ocupationalHistData: null,
      ocupationalHist2Data: null,
      ocupationalHist3Data: null,
      commerInsuranceData: null,
      commerInsurance2Data: null,
      commerInsurance3Data: null,
      commerInsurance4Data: null,
      commerInsurance5Data: null,
      commerInsurance6Data: null,
      commerInsurance7Data: null,
      commerInsurance8Data: null
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

        case 10:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 11:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 12:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 13:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 14:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 15:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";

        case 16:
        return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";
    
        default:
          return "COMMERCIAL INSURANCE - PATIENT & PAYOR INFORMATION FORM";
      }
    },
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
  
      <v-window v-model="step">
  
        <v-window-item :value="1">
          <medical-histoy @medicalHistory="mediHistoryData= $event"></medical-histoy>
        </v-window-item>
  
        <v-window-item :value="2">
          <medical-information @medicalInformation="mediInfoData= $event"></medical-information>
        </v-window-item>
  
        <v-window-item :value="3">
          <rehab-information @rehabInformation="rehabInfoData= $event"></rehab-information>
        </v-window-item>

        <v-window-item :value="4">
          <rehab-information-2 @rehabInformation2="rehabInfo2Data= $event"></rehab-information-2>
        </v-window-item>

        <v-window-item :value="5">
          <rehab-information-3 @rehabInformation3="rehabInfo3Data= $event"></rehab-information-3>
        </v-window-item>

        <v-window-item :value="6">
          <rehab-information-4 @rehabInformation4="rehabInfo4Data= $event"></rehab-information-4>
        </v-window-item>
        
        <v-window-item :value="7">
          <ocupational-history @ocupationalHistory="ocupationalHistData= $event"></ocupational-history>
        </v-window-item>

        <v-window-item :value="8">
          <ocupational-history-2 @ocupationalHistory2="ocupationalHist2Data= $event"></ocupational-history-2>
        </v-window-item>

        <v-window-item :value="9">
          <ocupational-history-3 @ocupationalHistory2="ocupationalHist3Data= $event"></ocupational-history-3>
        </v-window-item>

        <v-window-item :value="10">
          <commercial-insurance @commercilaInsurance="commerInsuranceData= $event"></commercial-insurance>
        </v-window-item>

        <v-window-item :value="11">
          <commercial-insurance-2 @commercialInsurance2="commerInsurance2Data= $event"></commercial-insurance-2>
        </v-window-item>

        <v-window-item :value="12">
          <commercial-insurance-3 @commercilalnsurance3="commerInsurance3Data= $event"></commercial-insurance-3>
        </v-window-item>

        <v-window-item :value="13">
          <commercial-insurance-4 @commercialInsurance4="commerInsurance4Data= $event"></commercial-insurance-4>
        </v-window-item>

        <v-window-item :value="14">
          <commercial-insurance-5 @commercialInsurance5="commerInsurance5Data= $event"></commercial-insurance-5>
        </v-window-item>

        <v-window-item :value="15">
          <commercial-insurance-6 @commercialInsurance6="commerInsurance6Data= $event"></commercial-insurance-6>
        </v-window-item>

        <v-window-item :value="16">
          <commercial-insurance-7 @commercialInsurance7="commerInsurance7Data= $event"></commercial-insurance-7>
        </v-window-item>

        <v-window-item :value="17">
          <commercial-insurance-8 @commercialInsurance8="commerInsurance8Data= $event"></commercial-insurance-8>
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
          :disabled="step === 17"
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