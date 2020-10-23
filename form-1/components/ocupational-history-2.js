Vue.component("ocupational-history-2", {

    data() {
      return {

        fields: [
        
            { label: 'What activities in your daily life or work duties have been most affected by your problem?', md: 12 , sm: 6, type: 'text-area', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'What are your goals to be achieved by the end of therapy?', md: 12 , sm: 6, type: 'text-area', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'Are you exercising at home?', md: 6 , sm: 6, type: 'radio', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'If yes, what type ?', md: 6 , sm: 6, type: 'text', disabled: true, value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'Are you using heat or cold?', md: 6 , sm: 6, type: 'radio', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'If yes, what type ?', md: 6 , sm: 6, type: 'text', disabled: true, value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'Are you wearing a sling or brace?', md: 6 , sm: 6, type: 'radio', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'If yes, what type ?', md: 6 , sm: 6, type: 'text', disabled: true, value: null, rule: [v => !!v || 'Field is required']  }
        ]
              
      };
    },
    mounted() {
      this.$emit('ocupationalHistory2', this.fields);
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

                    <!-- Text Area -->
                    <v-card-text class="field" v-if="field.type === 'text-area'">

                        <v-textarea
                            outlined
                            name="input-7-4"
                            :label="field.label"
                            :rules="field.rule"
                            required
                            v-model="field.value"
                        ></v-textarea>
                        
                    </v-card-text>
                    
                    <!-- Radio Buttons -->
                    <v-list-item  v-if="field.type === 'radio'">

                        <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>
        
                        <v-list-item-action>
                            <v-radio-group class="label-radio" @change="radioValue2($event, index)" v-model="field.value" row :rules="field.rule" >
                                <v-radio class="radio-button-3"  label="Yes"  value="Yes"></v-radio> 
                                <v-radio class="radio-button-3" label="No" value="No" ></v-radio>
                            </v-radio-group>
                        </v-list-item-action>
                
                    </v-list-item>
                    
                     <!-- Text -->
                     <v-card-text class="field" v-if="field.type === 'text' && !field.disabled">

                        <div class="label-other-rehab">
                            <span class="label-up-field" v-if="!field.disabled">What type ?</span> 
                        </div>

                        <v-text-field
                            :disabled="field.disabled"
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
   
   
