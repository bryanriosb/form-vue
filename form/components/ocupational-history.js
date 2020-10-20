Vue.component("ocupational-history", {

    data() {
      return {

        fields: [
            
            { label: 'Are you currently working', md: 6 , sm: 6, type: 'radio', value: null },
            { label: 'If no, How many days of work have you missed?', md: 6 , sm: 6, type: 'text', disabled: true, value: null},
            { label: 'Are you job duties', md: 6 , sm: 6, type: 'radio', value: null },
            { label: 'How many hours a day do you work?', md: 6 , sm: 6, type: 'number', value: null },
            { label: 'Who is your employer?', md: 12 , sm: 6, type: 'text', value: null },
            { label: 'What type of work do you do?', md: 12 , sm: 6, type: 'text', value: null }
          
          
        ]
              
      };
    },
    mounted() {
      this.$emit('ocupationalHistory', this.fields);
    },
    methods: {

        radioValue( value, index ){

            if( value === 'No' ) {
                this.fields[ index + 1 ].disabled = false;
            } else {
                this.fields[ index + 1 ].disabled = true;
            }
        },

        radioValue2( value, index ){

            if( value === 'Yes' ) {
                this.fields[ index + 1 ].disabled = false;
            } else {
                this.fields[ index + 1 ].disabled = true;
            }
        }
        
    },
    template: /*html*/ `

        <v-container fluid>
            
            <v-row no-gutters>
            
                <v-col class="d-flex" v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

                    <!-- Radio Buttons -->
                    <v-list-item  v-if="field.type === 'radio' && index === 0">

                        <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>
        
                        <v-list-item-action>
                            <v-radio-group class="label-radio" @change="radioValue($event, index)" v-model="field.value" row >
                                <v-radio class="radio-button-3"  label="Yes"  value="Yes"></v-radio> 
                                <v-radio class="radio-button-3" label="No" value="No" ></v-radio>
                            </v-radio-group>
                        </v-list-item-action>
                
                    </v-list-item>        

                    <!-- Radio Buttons -->
                    <v-list-item  v-if="field.type === 'radio' && index > 0">

                        <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>
        
                        <v-list-item-action>
                            <v-radio-group class="label-radio" @change="radioValue2($event, index)" v-model="field.value" row >
                                <v-radio class="radio-button-3"  label="Yes"  value="Yes"></v-radio> 
                                <v-radio class="radio-button-3" label="No" value="No" ></v-radio>
                            </v-radio-group>
                        </v-list-item-action>
                
                    </v-list-item>        
            
                    <!-- Text -->
                    <v-card-text class="field" v-if="field.type === 'text'">

                        <div class="label-other-rehab"  v-if="index === 1">
                            <span class="label-up-field" v-if="!field.disabled">How many days?</span> 
                        </div>

                        <v-text-field
                            :disabled="field.disabled"
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
   
   
