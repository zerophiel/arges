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
                    value: 'Name',
                },
                {
                    text: 'Count',
                    align: 'center',
                    value: 'Count',
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
                this.$http.get("https://futureprogram.gdn-app.com/brontes/future-project/record-count/") //NANTI GANTI SESUAI DOMAIN
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
