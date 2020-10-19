Vue.component("commercial-insurance-3", {

    data() {
      return {
        
        fields: [

          { label: 'Familiy or friend', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'Social Media ( FB, IG or Twitter)', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'Walk by', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'BHPT website', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'I’m a returning patient', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'Google maps/reviews', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'Doctor', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'General online search', type:'checkbox', md: 6 , sm: 6, value: null },
          { label: 'Other', type:'text', md: 12 , sm: 6, value: null },
          
      
        
        ]

      };
    },
    mounted() {
      this.$emit('commercialInsurance3', this.fields);
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
                3. How did you know about us? (Select one answer only)
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

          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
