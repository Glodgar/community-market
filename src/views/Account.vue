<template>
    <div class="container">
        <form @submit.prevent="updateUser">
            <div class="row">
                <div class="six columns">
                    <label for="name">name</label>
                    <input class="u-full-width" type="text" id="name" name="name" >
                        
                    <label for="phone">phone</label>
                    <input class="u-full-width" type="text" id="phone" name="phone" >
                        
                    <label for="adress">adress</label>
                    <input class="u-full-width" type="text" id="adress" name="adress" >
                </div>

                <div class="six columns">
                    <label for="lastName">last name</label>
                    <input class="u-full-width" type="text" id="lastName" name="lastName" >

                    <label for="email">email</label>
                    <input class="u-full-width" type="text" id="email" name="email" >

                    <label for="password">password</label>
                    <input class="u-full-width" type="text" id="password" name="password">
                </div>

                <div class="twelve columns action">
                    <input type="submit" value="Update">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'account',

        data() {
            return {
                user: {
                    name: null,
                    lastName: null,
                    phone: null,
                    email: null,
                    adress: null,
                    password: ''
                },
            }
        },

        methods: {
            updateUser() {
                console.log(this.user);
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
    }

    input {
        border: 1px solid rgba(0, 0, 0, 1)
    }

    input:hover, input:focus{
        border: 1px solid rgba(250, 150, 0, 1)
    }

    .action {
        display: flex;
        justify-content: center;
    }

    input[type="submit"] {
        margin-top: 50px;
        background-color: rgba(250, 150, 0, 1);
        color: rgba(0, 0, 0, 1);
        border: none;
    }
</style>