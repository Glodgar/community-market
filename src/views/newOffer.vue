<template>
    <div class="container">
        <form @submit.prevent="postOffer">
            <div class="row">
                <div class="row form">
                    <div class="six columns">
                        <label for="name">name</label>
                        <input class="u-full-width wiadomosc" type="text" id="name" name="name" v-model="offer.name">
                        
                        <label for="phone">phone</label>
                        <input class="u-full-width wiadomosc" type="text" id="phone" name="phone" v-model="offer.phone">
                        
                        <label for="adress">adress</label>
                        <input class="u-full-width wiadomosc" type="text" id="adress" name="adress" v-model="offer.adress">
                    </div>

                    <div class="six columns">
                        <label for="lastName">last name</label>
                        <input class="u-full-width wiadomosc" type="text" id="lastName" name="lastName" v-model="offer.lastName">

                        <label for="email">email</label>
                        <input class="u-full-width wiadomosc" type="text" id="email" name="email" v-model="offer.email">
                    </div>
                </div>

                <div class="row form">
                    <div class="six columns">
                        <label for="category">category</label>
                        <input class="u-full-width wiadomosc" type="text" id="category" name="category" v-model="offer.category">

                        <label for="item/service">item/service</label>
                        <input class="u-full-width wiadomosc" type="text" id="itemService" name="itemService" v-model="offer.itemService">

                        <label for="price">price</label>
                        <input class="u-full-width wiadomosc" type="text" id="price" name="price" v-model="offer.price">

                        <div class="importFile">
                            <input type="file" multiple>
                        </div>
                    </div>

                    <div class="six columns">
                        <label for="wiadomosc">Wiadomosc</label>
                        <textarea class="u-full-width wiadomosc" name="wiadomosc" id="wiadomosc" cols="30" rows="50" v-model="offer.message"></textarea>

                        <input type="submit" value="add offer">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'newOffer',

        data() {
            return {
                offer: {
                    name: null,
                    lastName: null,
                    phone: null,
                    email: null,
                    adress: null,
                    category: null,
                    itemService: null,
                    price: null,
                    message: null,
                },
            }
        },

        methods: {
            postOffer() {
                console.log(this.offer);
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
</style>