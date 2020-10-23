Vue.component("rehab-information-3", {

    data() {
      return {

        fields: [
            
            { label: 'AT BEST', md: 8 , sm: 10, type: 'radio', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'AT WORST', md: 8 , sm: 10, type: 'radio', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'CURRENT', md: 8 , sm: 10, type: 'radio', value: null, rule: [v => !!v || 'Field is required'] },
            { label: 'Where is your pain or problem located?', md: 12 , sm: 6, type: 'text', value: null, rule: [v => !!v || 'Field is required'] }
        ],

        icons: [

            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187133.svg', value: 0},
            {icon: null, value: 1},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187159.svg', value: 2},
            {icon: null, value: 3},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187142.svg', value: 4},
            {icon: null, value: 5},
            {icon: 'https://www.flaticon.com/svg/static/icons/svg/187/187136.svg', value: 6},
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
    template: /*html*/ `

        <v-container class="rating-container">


            <v-card-text>
                <span class="text-descript grey--text">
                  Please rate your pain marking the number that best correspond to your pain:
                </span>
            </v-card-text>

            <v-row justify="space-around" class="row-rating" no-gutters v-for="( field, index ) in fields" 
            :key="index" cols="12" :md="field.md" :sm="field.sm" v-if="field.type === 'radio'">

                <v-col
                    cols="12"
                    sm="10"
                    md="8"
                >
                    <v-sheet
                    elevation="3"
                    class="chips py-4"
                    >   

                    <v-card-text>

                        <span class="radio-rating-label">{{ field.label }}</span>

                        <v-chip-group
                            v-model="field.value"
                            :rules="field.rule"
                            required
                            active-class="primary--text"
                            mandatory
                        >
                            <v-chip
                                v-for="(i, index) in icons"
                                :key="index"
                                outlined
                                :value=i.value
                            > 
                                <img v-if="i.icon"
                                    width="22px"
                                    :src="i.icon"
                                > &nbsp;
                                <span style="text-align: center;">{{i.value}}</span>
                            </v-chip>
                            
                        </v-chip-group>

                    </v-card-text>
                        
                    </v-sheet>
                </v-col>

            </v-row>

            <!-- Text -->
            <v-card-text v-if="fields[3].type === 'text'">

                <v-text-field
                outlined
                :label="fields[3].label"
                :rules="fields[3].rule"
                required
                v-model="fields[3].value"
                ></v-text-field> 

            </v-card-text>
          
        </v-container>

    `,

});
   
   
