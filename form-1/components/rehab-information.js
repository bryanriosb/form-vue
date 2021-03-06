Vue.component("rehab-information", {

    data() {
      return {

        fields: [

            { id: 1, label: 'Have you had surgery for your condition?', md: 9 , sm: 6, type: 'radio', value: 'No', rule: [v => !!v || 'Field is required'] },
            { id: 2, label: 'If yes, Date condition', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true, rule: [v => !!v || 'Field is required'] },
            { id: 3, label: 'Is a condition related with Car accident?', md: 9 , sm: 6, type: 'radio', value: 'No', rule: [v => !!v || 'Field is required'] },
            { id: 4, label: 'If yes, Date Car accident', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true, rule: [v => !!v || 'Field is required'] },
            { id: 5, label: 'Is a condition related with Sport practice?', md: 9 , sm: 6, type: 'radio', value: 'No', rule: [v => !!v || 'Field is required'] },
            { id: 6, label: 'If yes, Date Sport practice', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true, rule: [v => !!v || 'Field is required'] },
            { id: 7, label: 'Is a condition related with work accident?', md: 9 , sm: 6, type: 'radio', value: 'No', rule: [v => !!v || 'Field is required'] },
            { id: 8, label: 'If yes, Date Work accident', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true, rule: [v => !!v || 'Field is required'] },
            { id: 9, label: 'Have you had any injections for your condition?', md: 9 , sm: 6, type: 'radio', value: 'No', rule: [v => !!v || 'Field is required'] },
            { id: 10, label: 'If yes, Date Your condition5', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true, rule: [v => !!v || 'Field is required'] },
          
        ]
              
      };
    },
    mounted() {
      this.$emit('rehabInformation', this.fields);
    },
    methods: {
      radioValue( value, index ){

          if( value === 'Yes' ) {
              this.fields[ index + 1 ].disabled = false;
          } else {
              this.fields[ index + 1 ].disabled = true;
          }
      }
    },
    template: /*html*/ `
      <v-container>
          
        <v-row no-gutters>

          <v-col class="d-flex" v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            <!-- Radio Buttons -->
            <v-list-item  v-if="field.type === 'radio'">

              <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>

              <v-list-item-action>
                  <v-radio-group class="label-radio" @change="radioValue($event, index)" v-model="field.value" row :rules="field.rule" >
                      <v-radio  label="Yes"  value="Yes"></v-radio> 
                      <v-radio label="No" value="No" ></v-radio>
                  </v-radio-group>
              </v-list-item-action>
        
            </v-list-item>

            <!-- Date -->
            <v-card-text class="field" v-if="field.type === 'date' && field.disabled === false" ref="date"> 

                <div class="label-other-rehab">
                    <span class="label-date" v-if="!field.disabled">Select Date</span> 
                </div>
                
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
                        :disabled="field.disabled"
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
   
   
