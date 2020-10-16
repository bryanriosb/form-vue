Vue.component("rehab-information", {

    data() {
      return {

        fields: [
            { id: 1, label: 'Have you had surgery for your condition?', md: 9 , sm: 6, type: 'radio', value: 'No' },
            { id: 2, label: 'If yes, Date condition', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true },
            { id: 3, label: 'Is a condition related with Car accident?', md: 9 , sm: 6, type: 'radio', value: 'No' },
            { id: 4, label: 'If yes, Date Car accident', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true },
            { id: 5, label: 'Is a condition related with Sport practice?', md: 9 , sm: 6, type: 'radio', value: 'No' },
            { id: 6, label: 'If yes, Date Sport practice', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true },
            { id: 7, label: 'Is a condition related with work accident?', md: 9 , sm: 6, type: 'radio', value: 'No' },
            { id: 8, label: 'If yes, Date Work accident', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true },
            { id: 9, label: 'Have you had any injections for your condition?', md: 9 , sm: 6, type: 'radio', value: 'No' },
            { id: 10, label: 'If yes, Date Your condition5', md: 3 , sm: 6, type: 'date', menu: false, value: null, disabled: true },
            { id: 11, label: 'Please list any diagnostic test you have had for this condition', md: 12 , sm: 6, type: 'text', value: null },
            { id: 12, label: 'Please list any medication that are you taking', md: 12 , sm: 6, type: 'text', value: null },
            { id: 13, label: 'What are your current symptoms?', md: 12 , sm: 6, type: 'text', value: null },
            { id: 14, label: 'How the injury or problem occurred?', md: 12 , sm: 6, type: 'text', value: null },
        ]
              
      };
    },
    mounted() {
      this.$emit('rehabInformation', this.fields);
    },
    methods: {
        change( event, index ){

            if( event === 'Yes' ) {
                this.fields[ index + 1 ].disabled = false;
            } else {
                this.fields[ index + 1 ].disabled = true;
            }
        }
    },
    template: /*html*/ `
      <v-container>

        <v-card-text>
            <span class="text-descript grey--text">
                Mark all that apply: This information is confidential and remains part of your chart
            </span>
        </v-card-text>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            <!-- Radio Buttons -->
            <v-card-text  v-if="field.type === 'radio'">


                <v-radio-group class="label-radio" @change="change($event, index)" v-model="field.value" row >

                    <p class="radio-label-ri">{{ field.label }}</p>
                    <v-radio class="radio-button2" label="Yes"  value="Yes"></v-radio> 
                    <v-radio class="radio-button2" label="No" value="No" ></v-radio>
        
                </v-radio-group>

            </v-card-text>

            <!-- Date -->
            <v-card-text class="field" v-if="field.type === 'date'" ref="date"> 

                <center>
                    <span class="label-date" v-if="!field.disabled">Select Date</span> 
                </center>
                
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

            <!-- Text -->
            <v-card-text class="other" v-if="field.type === 'text'">

                <v-text-field
                outlined
                :label="field.label"
                v-model="field.value"
                ></v-text-field> 
           </v-card-text>

            <!-- Checkbox -->
            <v-card-text class="check-field"  v-if="field.type === 'checkbox'">
                <v-checkbox class="check-container" v-model="field.value"
                    :label="field.label"
                ></v-checkbox>
            </v-card-text>
        
          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
