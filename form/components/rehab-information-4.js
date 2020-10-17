Vue.component("rehab-information-4", {

    data() {
      return {

        fields: [
            
            { label: 'Is your pain?', md: 4 , sm: 6, type: 'select', other: null, value: null },
            { label: 'Other', md: 4 , sm: 6, type: 'text', value: null },
            { label: 'CURRENT', md: 1 , sm: 2, type: 'radio', value: null },
            { label: 'Where is your pain or problem located?', md: 12 , sm: 6, type: 'text', value: null }

        ],
        select: [

            { type: 'Constant' },
            { type: 'Intermitten' },
            { type: 'Dull' },
            { type: 'Sharp' },
            { type: 'Other' },

        ]    
              
      };
    },
    mounted() {1
      this.$emit('rehabInformation4', this.fields);
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
   
   
