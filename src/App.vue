<template>
	<div id="app">

		<Nav />
		
		<router-view/>
	</div>
</template>

<script>
	import Nav from '../src/components/Nav';
	import axios from 'axios';
	import router from './router';

	import { mapGetters } from 'vuex';

	export default {
		name: 'app',

		components: {
			Nav,
		},

		computed: mapGetters(['isLogged']),

		mounted() {
			axios.interceptors.request.use((config) => {
				config.headers.Authorization = "test" + localStorage.getItem('accessToken' || '');
				return config;
			});

			if(!this.isLogged) {
				router.push({path: '/login'})
			}
		}
	}
</script>

<style lang="scss" scooped>
    .app {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        color: #ffffff;
    }
</style>
