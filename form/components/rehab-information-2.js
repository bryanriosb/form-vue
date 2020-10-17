Vue.component("rehab-information-2", {

    data() {
      return {

        fields: [
            
            { label: 'Please list any diagnostic test you have had for this condition', md: 12 , sm: 6, type: 'text', value: null },
            { label: 'Please list any medication that are you taking', md: 12 , sm: 6, type: 'text', value: null },
            { label: 'What are your current symptoms?', md: 12 , sm: 6, type: 'text', value: null },
            { label: 'How the injury or problem occurred?', md: 12 , sm: 6, type: 'text', value: null },
          
        ]
              
      };
    },
    mounted() {
      this.$emit('rehabInformation2', this.fields);
    },
    methods: {
        
    },
    template: /*html*/ `
      <v-container>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">

            
            <!-- Text -->
            <v-card-text class="other" v-if="field.type === 'text'">
                <span id="custom-label" class="grey--text">
                    {{field.label}}
                </span>

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

});
   
   
