<template>
    <v-container>
        <v-layout
                text-center
                wrap
        >
            <v-flex
                    xs12
            >
                <v-card>
                    <v-card-title>
                        Scoreboard
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
                            :items="items"
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
            search: "",
            headers: [
                {
                    text: 'Name',
                    align: 'center',
                    value: 'name',
                },
                {
                    text: 'Count',
                    align: 'center',
                    value: 'count',
                },
            ],
            items: [],
        }),
        sockets: {
            connect: function () {
                console.log('socket connected')
            },
            updateScoreboard: function (data) {
                this.items = data.data
            }
        },
        mounted() {
            this.getAllAffectedApp()
        },
        methods: {
            emit: function(){
                this.$socket.emit("test","coba")
            },
            getAllAffectedApp: function () {
                this.$http.get("https://pedas.gdn-app.com/hermes/affected-apps/")
                    .then(response => {
                        this.items = response.data.data
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
        }
    };
</script>
