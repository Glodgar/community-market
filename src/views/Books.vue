<template>
    <div class="container">

        <div class="row">
            <div class="twelve columns">
                
                <ul>
                    <li v-for="item in results" v-bind:key="item.id" v-on:click="getOrder(item)">
                        <p> {{ item.title }} </p>
                        <p> {{ item.description }} </p>
                        <p> {{ item.contactNumber }} </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';

    export default {
        name: 'Ksiazki',

        data() {
            return {
                results: [],
            }
        },

        async mounted() {
            const items = await axios.get('http://188.68.236.33:8000/books/');
            this.results = items.data;
        },
        
        methods: {
            //METODA PRZENOSZACA DO 'ksiazki'
            getOrder: function(item) {
                router.push({path:`books/${item.id}`})
            }
        }
    };
</script>

<style scoped>
    .container {
        margin-top: 50px;
        font-size: 20px;
    }

    .row {
        color: #000000;
        margin-bottom: 50px;

        padding: 50px;
        padding-bottom: 0px;
        
        border-radius: 10px;
        
    }

    .container ul {
        list-style: none;
    }

    .container li {
        background-color: rgb(236, 236, 236);
        padding-left: 10px;
        list-style: none;
        
        cursor: pointer;
        padding: 10px;
        margin-bottom: 50px;
    }

    p {
        margin: 2px;
    }

    .container li:hover {
        background-color: rgb(170, 164, 159);
    }
</style>