<template>
    <div class="container">
        book id
        <form @submit.prevent="updateData">
            <div class="row">
                <div class="six columns">
                    <label for="title">Tytuł</label>
                    <input class="u-full-width" type="text" id="title" name="title" v-model="results.title">
                </div>

                <div class="six columns">
                    <label for="phone">Numer kontaktowy</label>
                    <input class="u-full-width" type="text" id="phone" name="phone" v-model="results.contactNumber">
                </div>

                <div class="twelve columns">
                    <label for="description">Opis</label>
                    <textarea class="u-full-width" name="description" id="description" cols="30" rows="10" v-model="results.description"></textarea>
                </div>

                <div class="action">
                    <input type="submit" value="Aktualizuj">
                    <input type="button" value="Usuń" v-on:click="deleteOffer">
                </div>

            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    // import router from '../router';

    export default {
        name: 'Book',
        props: ['id'],

        data() {
            return {
                results: {},
            }
        },

        async mounted() {
            await axios.get(`http://188.68.236.33:8000/books/${this.id}`).then(res => {
                this.results = res.data;
            });

            console.log("przed aktualizacja: ", this.results);
        },

        methods: {
            updateData() {
                console.log("po aktualizacji: ", this.results);
                axios.patch(`http://188.68.236.33:8000/books/${this.id}`, this.results);
            },

            deleteOffer() {
                axios.delete(`http://188.68.236.33:8000/books/${this.id}`);
                // router.push({path:'/books'});
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

    .action input {
        margin: 20px;
    }

    .action input[type="button"]{
        background-color:rgba(250, 0, 0, 1);
    }
</style>