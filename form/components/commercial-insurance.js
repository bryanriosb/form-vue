Vue.component("commercial-insurance", {

    data() {
      return {
        
        fields: [

          { label: 'Last', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'First', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Middle Initial', type:'text', md: 4 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Street Address', type:'text', md: 6 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Apt#', type:'number', md: 2 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'City', type:'text', md: 2 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'State', type:'text', md: 2 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Zip Code', type:'number', md: 2 , sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Phone Place 1', type: 'select', md: 2, sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Phone 1 #', type:'number', md: 3 , sm: 6, place: null, rule: [v => !!v || 'Field is required']  , value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Phone Place 2', type: 'select', md: 2, sm: 6, value: null, rule: [v => !!v || 'Field is required']  },
          { label: 'Phone 2 #', type:'number', md: 3 , sm: 6, place: null, rule: [v => !!v || 'Field is required']  , value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Email address', type: 'text', md: 6,  sm: 6, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Date of Birth', type: 'date', md: 3,  sm: 6, menu: false, value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'Legal Sex', md: 3 , sm: 6, type: 'select', value: null, rule: [v => !!v || 'Field is required']   },
          { label: 'How would you like to receive appointment reminders?', type: 'select', md: 12,  sm: 6, alue: null, rule: [v => !!v || 'Field is required']   }

        ],
        placePhone: [

            'Home',
            'Mobile',
            'Work'

        ],
        legalSex: [

            'Male',
            'Female'

        ],
        appointmentRemainders: [

            'Call',
            'Text',
            'Email'

        ],

      };
    },
    mounted() {
      this.$emit('commercilaInsurance', this.fields);
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
                1. Patient Name (Full name or as on Insurance card)
            </span>
        </v-card-text>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

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
            <v-card-text class="field" v-if="field.type === 'select'">

                <v-select v-if="index === 8 || index === 10"
                    :items="placePhone" :label="field.label"
                    outlined  v-model="field.value"
                    :rules="field.rule"
                    required
                    @change="selectedValue($event, index)"
                > </v-select>

                <v-select v-if="index === 14"
                    :items="legalSex" :label="field.label"
                    outlined  v-model="field.value"
                    :rules="field.rule"
                    required
                > </v-select>

                <v-select v-if="index === 15"
                    :items="appointmentRemainders" :label="field.label"
                    outlined  v-model="field.value"
                    :rules="field.rule"
                    required
                > </v-select>


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

          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
