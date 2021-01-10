<template>
    <div class="login">
        <form @submit.prevent="login">
            <div class="row">
                <div class="twelve columns">
                    <label for="username">username</label>
                    <input class="u-full-width" type="text" id="username" name="username" v-model="credential.username">

                    <label for="password">password</label>
                    <input class="u-full-width" type="password" id="password" name="password" v-model="credential.password">

                    <div class="twelve columns action">
                        <input type="submit" value="Login">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login',

        data() {
            return {
                credential: {
                    "username": "",
                    "password": ""
                },
            }
        },

        methods: {
            login() {
                console.log(this.credential);
                console.log(this.$store);
                this.$store.dispatch('login', this.credential);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .login {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .row {
        border-radius: 25px;
        border: 1px solid rgba(250, 150, 0, 1);
        padding: 50px;
        padding-top: 26px;
    }

    input {
        border-radius: 0px;
        background: transparent;
        
        border: none;
        // border-bottom: 1px solid;
        border-bottom: 1px solid rgba(0, 0, 0, 1);
        // border-bottom: 1px solid rgba(0, 0, 0, 1);
    }

    input:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid rgba(250, 150, 0, 1);
    }

    input[type="submit"] {
        margin-top: 50px;
        background-color: rgba(250, 150, 0, 1);
        color: rgba(0, 0, 0, 1);
        border: none;
    }

    .action {
        display: flex;
        justify-content: center;
    }

    .loginRegister {
        display: flex;
        justify-content: center;
    }

    .loginRegister button {
        width: 100px;
        padding: 0;
        border: none;
    }
    
    .loginRegister button:hover {
        color: rgba(250, 150, 0, 1);
    }
</style>