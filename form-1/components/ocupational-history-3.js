Vue.component("ocupational-history-3", {

    data() {
      return {

        fields: [
            
            { label: 'Do you smoke?', md: 6 , sm: 6, type: 'radio', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'If yes, how much?', md: 6 , sm: 6, type: 'text', disabled: true, value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'Are you involved in any sport activity?', md: 6 , sm: 6, type: 'radio', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'How many hours a week?', md: 6 , sm: 6, type: 'number', disabled: true, value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'When are you schedule to see your doctor again?', md: 12 , sm: 6, type: 'text', value: null, rule: [v => !!v || 'Field is required']  },
            { label: `
                    To the best of my knowledge and belief, the information I have given is
                    complete and true. I hereby give my consent to receive therapy services 
                    at Body Hack Physical Therapy, LLC I have received a copy of The Patient/Client
                    Rights and Responsibilities Information Sheet.
                `, md: 12 , sm: 6, type: 'description'
            },
            { label: 'Patient or Legal Representative’s full name', md: 9 , sm: 6, type: 'text', value: null, rule: [v => !!v || 'Field is required']  },
            { label: 'Date', md: 3 , sm: 6, type: 'date', value: moment().format("YYYY-MM-DD"), rule: [v => !!v || 'Field is required']  },
            
        ]
              
      };
    },
    mounted() {
      this.$emit('ocupationalHistory3', this.fields);
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

        <v-container fluid>
            
            <v-row no-gutters>
            
                <v-col class="d-flex" v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

                    <!-- Radio Buttons -->
                    <v-list-item  v-if="field.type === 'radio'">

                        <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>
        
                        <v-list-item-action>
                            <v-radio-group class="label-radio" @change="radioValue($event, index)" 
                            :rules="field.rule" v-model="field.value" row >
                                <v-radio class="radio-button-3"  label="Yes"  value="Yes"></v-radio> 
                                <v-radio class="radio-button-3" label="No" value="No" ></v-radio>
                            </v-radio-group>
                        </v-list-item-action>
                
                    </v-list-item>        
            
                    <!-- Text -->
                    <v-card-text class="field" v-if="field.type === 'text' && !field.disabled">

                        <div class="label-other-rehab"  v-if="index === 1">
                            <span class="label-up-field" v-if="!field.disabled">How much?</span> 
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
                    
                     <!-- Number -->
                    <v-card-text class="field" v-if="field.type === 'number' && !field.disabled">

                        <div class="label-other-rehab"  v-if="index === 3">
                            <span class="label-up-field" v-if="!field.disabled">How many?</span> 
                        </div>

                        <v-text-field
                        type="number"
                        outlined
                        :disabled="field.disabled"
                        :label="field.label"
                        :rules="field.rule"
                        required
                        v-model="field.value"
                        ></v-text-field>
                        
                    </v-card-text>

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

                    <v-card-text class="field" v-if="field.type === 'description'">
                        <p class="text-descript grey--text">
                            {{ field.label }}
                        </p>
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
   
   
