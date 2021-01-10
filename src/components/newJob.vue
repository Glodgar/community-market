<template>
    <div class="container">
        <form @submit.prevent="postOffer">
            <div class="row">
                <div class="six columns">

                    <label for="category">Kategoria</label>
                    <select class="u-full-width" name="category" id="category" v-model="offer.category">
                        <option disabled selected value="">Wybierz kategorie</option>
                        <option value="IT">IT</option>
                        <option value="KK">Kadra Kierownicz</option>
                        <option value="AD">Administracja serwerami</option>
                        <option value="AB">Dla absolwentów</option>
                    </select>
                    
                    <label for="phone">Telefon kontaktowy</label>
                    <input class="u-full-width" type="text" id="phone" name="phone" v-model="offer.contactNumber">
                </div>

                <div class="six columns">
                    <label for="title">Tytuł</label>
                    <input class="u-full-width" type="text" id="title" name="title" v-model="offer.title">
                </div>

                <div class="twelve columns">
                    <label for="description">Opis</label>
                    <textarea class="u-full-width" name="description" id="description" cols="30" rows="10" v-model="offer.description"></textarea>

                    <div class="action">
                        <input type="submit" value="Dodaj">
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'newOffer',

        data() {
            return {
                offer: {
                    category: null,
                    title: null,
                    contactNumber: null,
                    description: null,
                },
            }
        },

        methods: {
            postOffer() {
                console.log(this.offer);
                axios.post('', this.offer)
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 50px; 
    }
    
    .row {
        border-radius: 25px;
        border: 1px solid rgba(250, 150, 0, 1);
        padding: 50px;
        padding-top: 26px;
        padding-bottom: 0px

        
    }

    .form {
        border-radius: 0px;
        border: none;
        padding: 0px;
        padding-top: 0px;
        padding-bottom: 50px;
    }

    input[type="submit"] {
        background-color: rgba(250, 150, 0, 1);
        color: rgba(0, 0, 0, 1);
    }

    .action {
        padding: 20px;
        text-align: center;
    }
</style>