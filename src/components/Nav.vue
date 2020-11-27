<template>
    <div class="navigationBar">
        <div class="fixedBar">
            <div class="nav">

                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/login">Login</router-link>
                <router-link to="/account">Account</router-link>
                <router-link to="/myOffers">My offers</router-link>
                <router-link to="/newOffer">New offer</router-link>
                <router-link to="/rules">Rules</router-link>

            </div>
        </div>
        <div class="staticBar"></div>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="scss" scooped>
    .fixedBar {
        height: 50px;
        width: 100%;
        background-color: rgba(250, 250, 250, 0.5);
        position: fixed;
        z-index: 10;

        font-weight: bold;
        line-height: 50px;

        border-bottom: 1px solid rgba(250, 150, 0, 1);
    }

    .nav {
        height: 50px;
        display: flex;
        right: 0;

        position: fixed;
    }

    .nav a {
        display: block;
        color: #000000;
        padding: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 50px;
        width: 100px;
        text-align: center;
    }

    .nav a:hover {
        color: rgba(250, 150, 0, 1);
    }

    .nav a.router-link-exact-active {
        text-decoration: underline 2px rgba(250, 150, 0, 1);
    }
    
    .staticBar {
        width: 100%;
        height: 50px;
        background-color: #ffffff;
    }
</style>