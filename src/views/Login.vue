<template>
    <div class="login">
        <form @submit.prevent="login">
            <div class="row">
                <div class="twelve columns">

                    <label for="email">email</label>
                    <input class="u-full-width" type="text" id="email" name="email">

                    <label for="password">password</label>
                    <input class="u-full-width" type="text" id="password" name="password">

                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        
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
        // background-color: rgba(40,40, 40, 1);
        border-radius: 25px;
        border: 1px solid rgba(250, 150, 0, 1);
        padding: 50px;
        
    }
</style>