Vue.component("commercial-insurance-6", {

    data() {
      return {
        
        fields: [

          { label: 'Primary Insurance Company:', type:'subtitle',  md: 12 , sm: 12, },
          { label: 'Ins. Co. Name:', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Insured’s Name:', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Ins. Ph #', type:'number', md:4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Patient ID #:', type:'number', md: 4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Group. #:', type:'number', md: 4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Policy/Plan #:', type:'number', md: 4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Secondary  Insurance Company:', type:'subtitle',  md: 12 , sm: 12, },
          { label: 'Ins. Co. Name 2:', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Insured’s Name 2:', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Ins. Ph # 2', type:'number', md:4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Patient ID # 2:', type:'number', md: 4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Group. # 2:', type:'number', md: 4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Policy/Plan # 2:', type:'number', md: 4, sm: 6, value: null, rule: [v => !!v || 'Field is required'] }
         
                       
        ]

      };
    },
    mounted() {
      this.$emit('commercialInsurance6', this.fields);
    },
    template: /*html*/ `

      <v-container>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            <v-card-text class="field" v-if="field.type === 'subtitle'">
              <span class="text-descript grey--text">
                  {{ field.label }}
              </span>
            </v-card-text>

            <!-- Text -->
            <v-card-text class="field" v-if="field.type === 'text'">

              <v-text-field
                outlined
                :label="field.label"
                :rules="field.rule"
                required
                v-model="field.value"
              ></v-text-field>
              
            </v-card-text>

            <!-- Number -->
            <v-card-text class="field" v-if="field.type === 'number'">

              <v-text-field
                type="number"
                outlined
                :label="field.label"
                :rules="field.rule"
                required
                v-model="field.value"
              ></v-text-field>
              
            </v-card-text>

          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
