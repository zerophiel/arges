<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs3>

      </v-flex>
      <v-flex
        xs6
        >
        <form>
          <v-text-field
                  v-model="name"
                  label="Name"
                  required
          ></v-text-field>
          <v-text-field
                  v-model="number"
                  label="Number"
                  type="number"
                  required
          ></v-text-field>


          <v-btn class="mr-4" @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>

      </v-flex>
      <v-flex xs3>

      </v-flex>
      <div class="text-center ma-2">
        <v-snackbar
                v-model="snackbar"
        >
          {{ snackbarText }}
          <v-btn
                  color="pink"
                  text
                  @click="snackbar = false"
          >
            Close
          </v-btn>
        </v-snackbar>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name:"",
    number:"",
    snackbar:false,
    snackbarText:""

  }),
  mounted() {

  },
  methods: {
    submit () {
      let postData = {
        name: this.name,
        number: parseInt(this.number)
      }
      this.$http.post(process.env.VUE_APP_BRONTES + "/future-project/records/",postData)
              .then(response => {
                this.snackbarText=response.data.message
                this.snackbar=true
                this.name = ''
                this.number = ''
              })
              .catch(e => {
                this.snackbarText=response.data.message
                this.snackbar=true
              })
    },
    clear () {
      this.name = ''
      this.number = ''
    },

  }
};
</script>
