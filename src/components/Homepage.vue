<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex
              xs6
              mb-5
              v-for="item in testVariable"
              v-bind:key="item.name"
      >
        <div class="text-center">
          <v-btn :to="{name:item.to}">{{item.name}}</v-btn>
        </div>
      </v-flex>
      <v-flex
              xs12
              mb-5
      >
        <div class="text-center">
          <v-btn @click="addButton">Add Button</v-btn>
        </div>
      </v-flex>
      <v-flex
        xs12
        >
        <v-card>
          <v-card-title>
            Affected Apps
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
                  :headers="headers"
                  :items="affectedApp"
                  :search="search"
          ></v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    testVariable: [],
    buttonCount: 0,
    search: "",
    headers: [
      {
        text: 'ID',
        align: 'center',
        value: 'affectedAppId',
      },
      {
        text: 'Label',
        align: 'center',
        value: 'affectedAppLabel',
      },
    ],
    affectedApp: []
  }),
  mounted() {
    this.testFunction()
    this.getAllAffectedApp()
  },
  methods: {
    getAllAffectedApp: function(){
      this.$http.get("https://pedas.gdn-app.com/hermes/affected-apps/")
              .then(response => {
                for(let i = 0; i < response.data.data.length; i++){
                  this.affectedApp.push({
                    id: response.data.data[i].ID,
                    affectedAppId: response.data.data[i].Code,
                    affectedAppLabel: response.data.data[i].Name
                  })
                }
              })
              .catch(e => {
                console.log(e)
              })
    },
    testFunction: function() {
      for(let i = 0; i < 2; i++){
        this.buttonCount += 1
        this.testVariable.push({
          name: "btn" + this.buttonCount,
          to: "test"
        })
      }
    },
    addButton: function () {
      this.buttonCount += 1
      this.testVariable.push({
        name: "btn" + this.buttonCount,
        to: "test"
      })
    }
  }
};
</script>
