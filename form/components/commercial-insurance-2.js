Vue.component("commercial-insurance-2", {

    data() {
      return {
        
        fields: [

          { label: 'Select A or B', type:'select', md: 12 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Insured is:', type:'radio', md: 9 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Last', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'First', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Middle Initial', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Legal Sex', md: 3 , sm: 6, type: 'select', value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Date of Birth', type: 'date', md: 3,  sm: 6, menu: false, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Street Address', type:'text', md: 6 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Apt#', type:'text', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'City', type:'text', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'State', type:'text', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Zip Code', type:'number', md: 3 , sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Phone Place', type: 'select', md: 3, sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Phone #', type:'number', md: 3 , sm: 6, place: null, value: null, rule: [v => !!v || 'Field is required']  },
        
        ],
        filingInsurance: [

            'A. Patient is the insured',
            'B. Insured is:'

        ],
        placePhone: [

            'Home',
            'Mobile',
            'Work'

        ],
        legalSex: [

            'Male',
            'Female'

        ]

      };
    },
    mounted() {
      this.$emit('commercialInsurance2', this.fields);
    },
    methods: {

        selectedValue( value, index ) {

            if( value ) {
                this.fields[ index + 1 ].place = value;
            } else {
                this.fields[ index + 1 ].place = value;
            }
        }
     
    },
    template: /*html*/ `
      <v-container>

        <v-card-text>
            <span class="text-descript grey--text">
                2. If Filing Insurance : Check A or B
            </span>
        </v-card-text>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            <!-- Select -->
            <v-card-text class="field" v-if="field.type === 'select' && index === 0">

                <v-select
                    :items="filingInsurance" :label="field.label"
                    :rules="field.rule"
                    required
                    outlined  v-model="field.value"
                > </v-select>

            </v-card-text>

            <div v-if="fields[0].value === 'B. Insured is:'">

                <!-- Radio Buttons -->
                <v-list-item  v-if="field.type === 'radio'">

                  <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>

                  <v-list-item-action>
                      <v-radio-group class="label-radio"  v-model="field.value" row >
                          <v-radio  label="Spouse"  value="Spouse"></v-radio> 
                          <v-radio label="Parent" value="Parent" ></v-radio>
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

                <!-- Date -->
                <v-card-text class="field" v-if="field.type === 'date' && field.label !== 'Birthday'"> 

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

                <!-- Select -->
                <v-card-text class="field" v-if="field.type === 'select' && index > 0">

                  <v-select
                      :items="placePhone" :label="field.label"
                      :rules="field.rule"
                      required
                      outlined  v-model="field.value"
                      @change="selectedValue($event, index)"
                  > </v-select>

                </v-card-text>

            </div>
            
          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
