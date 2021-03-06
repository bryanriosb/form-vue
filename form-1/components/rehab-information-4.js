Vue.component("rehab-information-4", {

    data() {
      return {

        fields: [
            
            { label: 'Is your pain?', md: 6 , sm: 6, type: 'select', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'Other', md: 6 , sm: 6, type: 'text', disabled: true, value: null, rule: [v => !!v || 'Field is required']},
            { label: 'What makes your pain/problem better?', md: 6 , sm: 6, type: 'text', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'Worse?', md: 6 , sm: 6, type: 'text', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'Is there pain at night?', md: 6 , sm: 6, type: 'radio', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'What position helps you to sleep?', md: 6 , sm: 6, type: 'text', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'Have you received therapy for this condition?', md: 6 , sm: 6, type: 'radio', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'If yes , When?', md: 6 , sm: 6, type: 'text', disabled: true, value: null, rule: [v => !!v || 'Field is required'] },

        ],
        select: [

            'Constant',
            'Intermitten',
            'Dull',
            'Sharp',
            'Other'

        ]    
              
      };
    },
    mounted() {
      this.$emit('rehabInformation4', this.fields);
    },
    methods: {

        selectedValue( value, index ) {

            if( value === 'Other' ) {
                this.fields[ index + 1 ].disabled = false;
            } else {
                this.fields[ index + 1 ].disabled = true;
            }
        },

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
                    
                    <!-- Select -->
                    <v-card-text class="field" v-if="field.type === 'select'">

                        <v-select 
                            :items="select" :label="field.label"s
                            outlined  v-model="field.value"
                            @change="selectedValue($event, index)"
                            :rules="field.rule"
                            required
                        > </v-select>
                    </v-card-text>

                    <!-- Text -->
                
                    <v-card-text class="field" v-if="field.type === 'text' && !field.disabled">

                        <div class="label-other-rehab"  v-if="index === 1">
                            <span class="label-up-field" v-if="!field.disabled">Please write which</span> 
                        </div>

                        <div class="label-other-rehab"  v-if="index === 7">
                            <span class="label-up-field" v-if="!field.disabled">Please write when</span> 
                        </div>

                        <v-text-field
                            :disabled="field.disabled"
                            outlined
                            :label="field.label"
                            v-model="field.value"
                            :rules="field.rule"
                            required
                        ></v-text-field>
                        
                    </v-card-text>    
                    
                    <!-- Radio Buttons -->
                    <v-list-item  v-if="field.type === 'radio' && index === 4">

                        <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>
        
                        <v-list-item-action>
                            <v-radio-group class="label-radio" v-model="field.value" row :rules="field.rule">
                                <v-radio class="radio-button-3"  label="Yes"  value="Yes"></v-radio> 
                                <v-radio class="radio-button-3" label="No" value="No" ></v-radio>
                            </v-radio-group>
                        </v-list-item-action>
                
                    </v-list-item>
                    
                    <!-- Radio Buttons -->
                    <v-list-item  v-if="field.type === 'radio' && index > 4">

                        <v-list-item-content class="text-left">{{ field.label }}</v-list-item-content>
        
                        <v-list-item-action>
                            <v-radio-group class="label-radio" @change="radioValue($event, index)" v-model="field.value" row  :rules="field.rule">
                                <v-radio class="radio-button-3"  label="Yes"  value="Yes"></v-radio> 
                                <v-radio class="radio-button-3" label="No" value="No" ></v-radio>
                            </v-radio-group>
                        </v-list-item-action>
                
                    </v-list-item>      

                </v-col>
            
            </v-row>

        </v-container>

    `,

});
   
   
