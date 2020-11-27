<template>
	<div id="app">

		<Nav />
		
		<router-view/>
	</div>
</template>

<script>
	import Nav from '../src/components/Nav';

	export default {
		name: 'app',

		components: {
			Nav,
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
