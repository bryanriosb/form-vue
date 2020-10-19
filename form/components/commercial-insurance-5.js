Vue.component("commercial-insurance-5", {

    data() {
      return {
        
        fields: [

          { label: 'Employer Name:', type:'text', md: 12 , sm: 6, value: null },
          { label: 'Employer Phone #', type:'text', md: 4 , sm: 6, value: null },
          { label: 'Street Address', type:'text', md: 8 , sm: 6, value: null },
          { label: 'Suite#', type:'text', md:3, sm: 6, value: null },
          { label: 'City', type:'text', md: 3, sm: 6, value: null },
          { label: 'State', type:'text', md:3, sm: 6, value: null },
          { label: 'Zip Code', type:'number', md: 3, sm: 6, value: null }
                       
        ]

      };
    },
    mounted() {
      this.$emit('commercialInsurance5', this.fields);
    },
    template: /*html*/ `

      <v-container>

        <v-card-text>
            <span class="text-descript grey--text">
                5. Employer Information (Please complete if the insured person’s employer is the source of benefits)
            </span>
        </v-card-text>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            <!-- Text -->
            <v-card-text class="field" v-if="field.type === 'text'">

              <v-text-field
                outlined
                :label="field.label"
                v-model="field.value"
              ></v-text-field>
              
            </v-card-text>

            <!-- Number -->
            <v-card-text class="field" v-if="field.type === 'number'">

              <v-text-field
                type="number"
                outlined
                :label="field.label"
                v-model="field.value"
              ></v-text-field>
              
            </v-card-text>

          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
