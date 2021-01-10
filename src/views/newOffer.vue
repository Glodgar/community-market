<template>
    <div class="container">
        <p class="descr"> Wybierz kategorię dla której chcesz dodać ogłoszenie </p>
        <div class="choose">
            <input type="radio" id="book" name="template" v-model="template" value='book' v-on:click=test>
            <label for="book">Książki</label>

            <input type="radio" id="automotive" name="template" v-model="template" value='automotive' v-on:click=test>
            <label for="automotive">Motoryzacja</label>

            <input type="radio" id="job" name="template" v-model="template" value='job' v-on:click=test>
            <label for="job">Praca</label>
        </div>

       <div class="1" v-if="template=='book'">
           <Books />
       </div>

        <div class="2" v-if="template=='automotive'">
            <Automotive />
        </div>

        <div class="3" v-if="template=='job'">
            <Job />
        </div>
    
    </div>
</template>

<script>
    import Books from '../components/newBook';
    import Automotive from '../components/newAutomotive';
    import Job from '../components/newJob';
    
    export default {
        name: 'newOffer',

        components: {
            Books,
            Automotive,
            Job
		},

        data() {
            return {
                template: 'book'
            }
        },

        methods: {
            test() {
                console.log(this.template);
            }
        }
    }
</script>

<style scoped>
    .descr {
        display: flex;
        justify-content: center;
    }

    .container {
        margin-top: 50px; 
    }

    .choose {
        display: flex;
        justify-content: center;
    }

    .choose input {
        margin-left: 50px;
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