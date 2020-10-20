Vue.component("medical-information", {

    data() {
      return {

        fields: [

          { label: 'Heart Disease', type: 'checkbox', md: 3 , sm: 6, value: null },
          { label: 'Diabetes', type: 'checkbox', md: 3 , sm: 6, value: null },
          { label: 'High Blood Pressure', type: 'checkbox', md: 3 , sm: 6, value: null },
          { label: 'Pacemaker', type: 'checkbox', md: 3,  sm: 6, value: null },
          { label: 'Cancer', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Tuberculosis', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Visual Impaired', type: 'checkbox', md: 3,  sm: 6, value: null },
          { label: 'Epilepsy', type: 'checkbox', md: 3,  sm: 6, value: null },
          { label: 'HIV/AIDS', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Arthritis', type: 'checkbox', md: 3,  sm: 6, value: null },
          { label: 'Hearing Impaired', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Fibromyalgia', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Stroke', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Asthma', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Hearing Impaired', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Scoliosis', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Osteoporosis', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Hepatitis', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Latex Allergy', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Depression/Anxiety', md: 3 , sm: 6, type: 'checkbox', value: null },
          { label: 'Other (please explain)', md: 12, sm: 12, type: 'text', value: null }
          
        ]     
      };
    },
    mounted() {
      this.$emit('medicalInformation', this.fields);
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

            <!-- Checkbox -->
            <v-card-text class="check-field"  v-if="field.type === 'checkbox'">
                <v-checkbox class="check-container" v-model="field.value"
                    :label="field.label"
                ></v-checkbox>
            </v-card-text>
           
            <!-- Text -->
            <v-card-text class="other" v-if="field.type === 'text'">

              <v-text-field
                outlined
                :label="field.label"
                v-model="field.value"
              ></v-text-field>
              
            </v-card-text>

          </v-col>

        </v-row>

      </v-container>

    `,

    props:['formvalue']

});
   
   
