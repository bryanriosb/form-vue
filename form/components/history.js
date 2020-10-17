Vue.component("medical-histoy", {

    data() {
      return {
        
        fields: [

          { label: 'Name', type:'text', md: 6 , sm: 6, value: null },
          { label: 'Date', type: 'date', md: 3, sm: 6, menu: false, value: moment().format("YYYY-MM-DD") },
          { label: 'Birthday', type: 'date', md: 3 , sm: 6, menu: false, value: null },
          { label: 'Age', type: 'number', md: 2,  sm: 6, alue: null },
          { label: 'Do you have a prescription?', md: 10 , sm: 6, type: 'radio', value: null },
          { label: 'Referring Physician', md: 8 , sm: 6, type: 'text', value: null },
          { label: 'Phone', type: 'number', md: 4,  sm: 6, alue: null },
          { label: 'Address', type: 'text', md: 12,  sm: 6, alue: null },
          { label: 'Chief Complaint/Injury', md: 9 , sm: 6, type: 'text', value: null },
          { label: 'Date of Injury', type: 'date', md: 3,  sm: 6, enu: false, value: null }

        ],
      
      };
    },
    mounted() {
      this.$emit('medicalHistory', this.fields);
    },
    methods: {

      calculateAge() {
        
        const d = moment(this.fields[1].value);
        const b = moment(this.fields[2].value);
        const age = d.diff(b, 'years');

        this.fields[3].value = age;

      }
    },
    template: /*html*/ `
      <v-container>

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
            
            <!-- Date Event Birthday -->
            <v-card-text class="field"  v-if="field.type === 'date' && field.label === 'Birthday'">
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
                    outlined
                    prepend-inner-icon="mdi-calendar"
                    v-model.lazy="field.value"
                    :label="field.label"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>

                </template>

                <v-date-picker
                  v-model="field.value"
                  @input="field.menu = false; calculateAge()"
                  
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
                v-model="field.value"
              ></v-text-field>
              
            </v-card-text>
            
            <!-- Radio Buttons -->
            <v-card-text v-if="field.type === 'radio'">

              <v-radio-group v-model="field.value" row >

                <p class="radio-label-mh">{{ field.label }}</p>
                
                <v-radio class="radio-button" label="Yes"  value="Yes"></v-radio> 
                <v-radio class="radio-button" label="No" value="No" ></v-radio>
    
              </v-radio-group>

            </v-card-text>

          </v-col>

        </v-row>
        <!-- <v-btn depressed @click="calculateAge()" color="primary">
          Primary
        </v-btn> -->
      </v-container>

    `,

});
   
   
