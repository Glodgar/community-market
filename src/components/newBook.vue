<template>
    <div class="container">
        <form @submit.prevent="postOffer">
            <div class="row">
                <div class="six columns">
                    <label for="title">Tytuł</label>
                    <input class="u-full-width" type="text" id="title" name="title" v-model="offer.title">
                </div>

                <div class="six columns">
                    <label for="phone">Numer kontaktowy</label>
                    <input class="u-full-width" type="text" id="phone" name="phone" v-model="offer.phone">
                </div>

                <div class="twelve columns">
                    <label for="description">Opis</label>
                    <textarea class="u-full-width" name="description" id="description" cols="30" rows="10" v-model="offer.description"></textarea>
                </div>

                <div class="action">
                    <input type="submit" value="Dodaj">
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
                    title: null,
                    phone: null,
                    description: null,
                },
            }
        },

        methods: {
            postOffer() {
                console.log(this.offer);
                axios.post('http://127.0.0.1/8000/books/', this.offer);
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
        text-align: center;
        padding: 20px;
    }
</style>