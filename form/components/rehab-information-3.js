Vue.component("rehab-information-3", {

    data() {
      return {

        fields: [
            
            { label: 'AT BEST', md: 1 , sm: 2, type: 'radio', value: null },
            { label: 'AT WORST', md: 1 , sm: 2, type: 'radio', value: null },
            { label: 'CURRENT', md: 1 , sm: 2, type: 'radio', value: null },
            { label: 'Where is your pain or problem located?', md: 12 , sm: 6, type: 'text', value: null }
        ],

        icons: [

            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187133.svg', value: 0},
            {icon: null, value: 1},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187142.svg', value: 2},
            {icon: null, value: 3},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187161.svg', value: 4},
            {icon: null, value: 5},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187143.svg', value: 6},
            {icon: null, value: 7},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187143.svg', value: 8},
            {icon: null, value: 9},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187150.svg', value: 10},

        ]

        
              
      };
    },
    mounted() {1
      this.$emit('rehabInformation3', this.fields);
    },
    methods: {
        
    },
    template: /*html*/ `

        <v-container class="rating-container">

            <v-card-text>
                <span class="text-descript grey--text">
                  Please rate your pain marking the number that best correspond to your pain:
                </span>
            </v-card-text>

            <div class="rating">

                <v-row class="row-rating" no-gutters v-for="( field, index ) in fields" 
                :key="index" cols="12" :md="field.md" :sm="field.sm" v-if="field.type === 'radio'">

                    <p class="radio-rating-label">{{ field.label }}</p>
                    <v-col v-for="( i, index ) in icons" :key="index">
                        
                        <v-radio-group class="icons" v-model="field.value" row >
                          
                            <v-img class="emoji" :src="i.icon"></v-img>

                            <v-radio :label="String(index)" :value="i.value"></v-radio> 
                          
                        </v-radio-group>
                                    
                    </v-col>

                   
                    
                </v-row>

            </div>

            <!-- Text -->
            <v-card-text v-if="fields[3].type === 'text'">

                <v-text-field
                outlined
                :label="fields[3].label"
                v-model="fields[3].value"
                ></v-text-field> 

            </v-card-text>
          
        </v-container>

    `,

});
   
   
