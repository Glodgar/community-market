<template>
    <div class="container">
        <form @submit.prevent="updateData">
            <div class="row">
                <div class="six columns">
                    <label for="categories">Kategoria</label>
                    <select class="u-full-width" name="category" id="category" v-model="results.category">
                        <option disabled selected value="">Wybierz kategorie</option>
                        <option value="Samochody osobowe">Samochody osobowe</option>
                        <option value="Samochody ciężarowe">Samochody ciężarowe</option>
                    </select>

                    <label for="brands">Marka</label>
                    <select class="u-full-width" name="brands" id="brands" v-model="results.brand">
                        <option disabled selected value="">Wybierz marke</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="BMW">BMW</option>
                        <option value="Opel">Opel</option>
                        <option value="Toyota">Toyota</option>
                    </select>

                    <label for="models">Model</label>
                    <select class="u-full-width" name="models" id="models" v-model="results.modell">
                        <option disabled selected value="">Wybierz model</option>
                        <option value="Passat">Passat</option>
                        <option value="Seria 1">Seria 1</option>
                        <option value="Corsa">Corsa</option>
                        <option value="Avensis">Avensis</option>
                    </select>

                    <label for="fuels">Rodzaj paliwa</label>
                    <select class="u-full-width" name="fuels" id="fuels" v-model="results.fuel">
                        <option value="Diesel">Diesel</option>
                        <option value="Benzyna">Benzyna</option>
                        <option value="LPG">LPG</option>
                        <option value="Hybryda">Hybryda</option>
                        <option value="Elektryczny">Elektryczny</option>
                    </select>

                    <label for="phone">Telefon kontaktowy</label>
                    <input class="u-full-width" type="text" name="phone" id="phone" v-model="results.contactNumber">

                    <label for="title">Tytuł</label>
                    <input class="u-full-width" type="text" name="title" id="title" v-model="results.title">

                    <label for="productionYear">Rok produkcji</label>
                    <input class="u-full-width" type="date" value="yyyy-mm-dd" name="productionYear" id="productionYear" v-model="results.productionYear">

                    <label for="capacityEngine">Pojemność silnika</label>
                    <input class="u-full-width" type="text" name="capacityEngine" id="capacityEngine" v-model="results.capacityEngine">
                </div>

                <div class="six columns">
                    <label for="gearbox">Rodzaj skrzyni biegów</label>
                    <select class="u-full-width" name="gearbox" id="gearbox" v-model="results.gearbox">
                        <option selected disabled value="">Wybierz skrzynię</option>
                        <option value="Manualna">Manualna</option>
                        <option value="Automatyczna">Automatyczna</option>
                    </select>

                    <label for="body">Rodzaj nadwozia</label>
                    <select class="u-full-width" name="body" id="body" v-model="results.body">
                        <option selected disabled value="">Wybierz nadwozie</option>
                        <option value="Kombi">Kombi</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Hatchback">Hatchback</option>
                    </select>

                    <label for="countries">Kraj pochodzenia</label>
                    <select class="u-full-width" name="countries" id="countries" v-model="results.countryOrigin">
                        <option selected disabled value="">Wybierz kraj</option>
                        <option value="Polska">Polska</option>
                        <option value="Niemcy">Niemcy</option>
                        <option value="Niderlandy">Niderlandy</option>
                        <option value="Wielka Brytania">Wielka Brytania</option>
                    </select>
                    
                    <label for="distance">Przebieg</label>
                    <input class="u-full-width" type="text" name="distance" id="distance" v-model="results.distance">

                    <label for="enginePower">Moc silnika</label>
                    <input class="u-full-width" type="text" name="enginePower" id="enginePower" v-model="results.enginePower">

                    <label for="color">Kolor</label>
                    <input class="u-full-width" type="text" name="color" id="color" v-model="results.color">

                    <label for="isEngland">Kierownica po prawej</label>
                    <select class="u-full-width" name="isEngland" id="isengland" v-model="results.isEngland">
                        <option selected disabled value=""></option>
                        <option value="true">Tak</option>
                        <option value="false">Nie</option>
                    </select>

                    <label for="isBroken">Uszkodzony</label>
                    <select class="u-full-width" name="isBroken" id="isBroken" v-model="results.isBroken">
                        <option selected disabled value=""></option>
                        <option value="true">Tak</option>
                        <option value="false">Nie</option>
                    </select>
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

    export default {
        name: 'Automotive',
        props: ['id'],

        data() {
            return {
                results: {}
            }
        },

        async mounted() {
            await axios.get(`http://188.68.236.33:8000/automotive/${this.id}`).then(res => {
                this.results = res.data;
            });
            console.log(this.results)
        },

        methods: {
            updateData() {
                axios.patch(`http://188.68.236.33:8000/automotive/${this.id}`, this.results);
            },

            deleteOffer() {
                axios.delete(`http://188.68.236.33:8000/automotive/${this.id}`);
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