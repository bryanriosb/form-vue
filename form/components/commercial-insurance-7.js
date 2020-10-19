Vue.component("commercial-insurance-7", {

    data() {
      return {
        
        fields: [
          { 
            label: 'Assignment of Insurance Benefits',
            content: `I Authorize that the payment of my insurance benefits be made directly 
                    to Body Hack Physical Therapy, LLC for all services delivered; if I am
                    paid directly I will promptly pay Body HackPhysical Therapy, LLC all
                    monies paid to me`,
            type:'checkbox', md: 12 , sm: 12, value: null
          },
          { 
            label: 'Guarantee of Payment',
            content: `I understand that all payments designated as ‘the patient’s responsibility’
                    such as co-insurance and deductibles are due and payable at the time of service
                    or statement receipt. I guarantee I will pay the amount deemed ‘my responsibility’
                    by my insurer by the statement due date.`,
            type:'checkbox', md: 12 , sm: 12, value: null
          },
          { 
            label: 'Certification of Information',
            content: `I certify that the information I have provided Body Hack Physical Therapy, LLC for
                   payment including, but not limited to, related accidents, illnesses or other insurers
                   is accurate and truthful.`,
            type:'checkbox', md: 12 , sm: 12, value: null
          }
               
        ]

      };
    },
    mounted() {
      this.$emit('commercialInsurance7', this.fields);
    },
    template: /*html*/ `

      <v-container>

        <v-card-text>
          <span class="text-descript grey--text">
              7. Payment Authorization: (Initials required for all 3 statements)
          </span>
        </v-card-text>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            <center>
              <v-card-text class="field" v-if="field.type === 'subtitle'">
                <span class="text-descript grey--text">
                    {{ field.label }}
                </span>
              </v-card-text>
            </center>

             <!-- Checkbox -->
             <v-card-text class="check-field"  v-if="field.type === 'checkbox'">
                  <v-checkbox class="check-container2" v-model="field.value"
                      :label="field.content"
                  ></v-checkbox>
              </v-card-text>
            
          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
