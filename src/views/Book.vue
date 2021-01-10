<template>
    <div class="container">
        book id
        <form @submit.prevent="updateData">
            <div class="row">
                <div class="six columns">
                    <label for="title">title</label>
                    <input class="u-full-width" type="text" id="title" name="title" v-model="results.title">
                </div>

                <div class="six columns">
                    <label for="phone">phone</label>
                    <input class="u-full-width" type="text" id="phone" name="phone" v-model="results.contactNumber">
                </div>

                <div class="twelve columns">
                    <label for="description">description</label>
                    <textarea class="u-full-width" name="description" id="description" cols="30" rows="10" v-model="results.description"></textarea>
                </div>

                <div class="action">
                    <input type="submit" value="Aktualizuj">
                </div>

            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

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
                axios.put(`http://188.68.236.33:8000/books/${this.id}`, this.results);
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