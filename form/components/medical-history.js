
const form2 = `

  <v-container>
    <v-row no-gutters>
      <v-col v-for="(field, index) in fields" :key="index" cols="12" md="3">

        <v-card-text>
          <v-text-field
            outlined
            size="sm"
            :label="field.label"
            :value="field.value"
          ></v-text-field>
          <!-- <span class="caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span> -->
        </v-card-text>

      </v-col>
    </v-row>
  </v-container>

 

`

Vue.component('medical-histoy', { 
  template: form2,
  data(){
    return {
      fields: [
        {label: 'Name', value: ''},
        {label: 'Date', value: ''},
        {label: 'Birthday', value: ''},
        {label: 'Age', value: ''},
        {label: 'Do you have a prescription?', value: ''},
        {label: 'Referring Physician', value: ''},
        {label: 'Phone', value: ''},
        {label: 'Address', value: ''},
        {label: 'Chief Complaint/Injury', value: ''},
        {label: 'Date of Injury', value: ''}
      ]
    }
  }

});
   
   
