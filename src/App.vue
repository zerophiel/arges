<template>
    <v-app id="app">
        <v-app-bar app>
            <v-app-bar-nav-icon @click="goHome">
                <v-icon>mdi-home</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span> Future Project</span>

            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        data: () => ({
            //
        }),
        methods: {
            goHome: function () {
                this.$router.push({name:"home"})
            }
        }
    };
</script>
