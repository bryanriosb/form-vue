Vue.component("commercial-insurance-4", {

    data() {
      return {
        
        fields: [

          { label: 'Would you like an e-mail receipt with each transaction?', type:'radio', md: 6 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Name on Card:', type:'text', md: 6 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Credit card type', type:'select', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Credit card number', type:'number', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Expidation date', type:'date', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Security code', type:'number', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Billing zip code', type:'number', md: 3 , sm: 6, value: null, 
            rule: [
              v => !!v || 'Field is required', v => (v && v.length === 4) || (v && v.length === 5) || 'The Zip Code must have 4 or 5 digits'
            ]
          },
                       
        ],
        cards: [

          'Master Card',
          'Visa',
          'American Express',
          'Discover'

        ]

      };
    },
    mounted() {
      this.$emit('commercialInsurance4', this.fields);
    },
    template: /*html*/ `

      <v-container>

        <v-card-text>
            <span class="text-descript grey--text">
                4. Credit Card Payment Authorization
            </span>
        </v-card-text>

        <v-card-text>
            <span class="text-descript grey--text">
              I hereby authorize Body Hack Physical Therapy, LLC to charge
              my credit card for services rendered and/or products supplied
              until this authorization is revoked by me. It is my responsibility
              to notify Body Hack Physical Therapy, LLC any changes regarding this
              credit card authorization.
            </span>
        </v-card-text>


        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            <!-- Radio Buttons -->
            <v-list-item  v-if="field.type === 'radio'">

              <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>

              <v-list-item-action>
                  <v-radio-group class="label-radio"  v-model="field.value" row  :rules="field.rule" >
                      <v-radio  label="Yes"  value="Yes"></v-radio> 
                      <v-radio label="No" value="No" ></v-radio>
                  </v-radio-group>
              </v-list-item-action>
        
            </v-list-item>

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

            <!-- Select -->
            <v-card-text class="field" v-if="field.type === 'select'">

                <v-select
                    :items="cards" :label="field.label"
                    :rules="field.rule"
                    required
                    outlined  v-model="field.value"
                > </v-select>

            </v-card-text>

            <!-- Number -->
            <v-card-text class="field" v-if="field.type === 'number'">

              <v-text-field
              :disabled="field.label === 'Age'"
                type="number"
                outlined
                :label="field.label"
                :rules="field.rule"
                required
                v-model="field.value"
              ></v-text-field>
              
            </v-card-text>

            <!-- Date -->
            <v-card-text class="field" v-if="field.type === 'date'"> 

                <v-menu 
                
                  v-model="field.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >

                <template v-slot:activator="{ on, attrs }">

                  <v-text-field no-gutters
                    :disabled="field.label === 'Date'"
                    outlined
                    prepend-inner-icon="mdi-calendar"
                    v-model="field.value"
                    :label="field.label"
                    :rules="field.rule"
                    required
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>

                </template>

                <v-date-picker
                  v-model="field.value"
                  @input="field.menu = false"
                ></v-date-picker>

              </v-menu>

            </v-card-text>  

          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
