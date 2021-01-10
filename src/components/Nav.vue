<template>
    <div class="navigationBar">
        <div class="fixedBar">
            <div class="nav">

                <router-link to="/">Home</router-link>
                <!-- <router-link to="/about">About</router-link> -->
                <!-- <router-link to="/rules">Rules</router-link> -->
                <router-link to="/books">Książki</router-link>
                <router-link to="/jobs">Oferty pracy</router-link>
                <router-link to="/automotives">Samochody</router-link>
                <!-- <router-link v-if="isLogged" to="/account">Konto</router-link> -->
                <router-link v-if="isLogged" to="/myOffers">Moje ogłoszenia</router-link>
                <router-link v-if="isLogged" to="/newOffer">Dodaj ogłoszenie</router-link>
                <!-- <router-link v-if="!isLogged" to="/register">Rejestracja</router-link> -->
                <router-link v-if="!isLogged" to="/login">Zaloguj</router-link>

                <div class="logout"  v-if="isLogged" v-on:click="logout">Logout</div>

            </div>
        </div>
        <div class="staticBar"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Nav',

    computed: mapGetters(['isLogged']),

    methods: {
        logout() {
            console.log('Wylogowano');
            this.$store.dispatch('logout');
        }
    }
}
</script>

<style lang="scss" scooped>
    .fixedBar {
        height: 50px;
        width: 100%;
        background-color: rgba(250, 250, 250, 0.8);
        position: fixed;
        z-index: 10;

        font-weight: bold;
        line-height: 50px;
        border: none;
        border-bottom: 1px solid rgba(250, 150, 0, 1);
    }

    .nav {
        height: 20px;
        display: flex;
        
        position: fixed;
    }

    .logout {
        display: block;
        color: #000000;
        padding: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 50px;
        width: 100px;
        text-align: center;
        border: none;
        cursor: pointer;
    }

    .logout:hover {
        color: rgba(250, 150, 0, 1);
    }

    .nav a {
        display: block;
        color: #000000;
        padding: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 50px;
        text-align: center;
        align-items: center;
    }

    .nav a:hover {
        color: rgba(250, 150, 0, 1);
    }

    .nav a.router-link-exact-active {
        text-decoration: underline 2px rgba(250, 150, 0, 1);
    }
    
    .staticBar {
        width: 100%;
        height: 50px;
        background-color: #ffffff;
    }
</style>