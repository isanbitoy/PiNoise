<template>
	<footer>
		<ul class="nav-list">
			<li><a v-on:click="setCategory('business')">Business</a></li>
      		<li><a v-on:click="setCategory('entertainment')">Entertainment</a></li>
      		<li><a v-on:click="setCategory('health')">Health</a></li>
      		<li><a v-on:click="setCategory('science')">Science</a></li>
      		<li><a v-on:click="setCategory('sports')">Sports</a></li>
      		<li><a v-on:click="setCategory('technology')">Technology</a></li>
		</ul>
		<div class="footer-list">
			<div class="copyright">
				<span>&copy;</span>
				<span>{{ year }}</span>
				<span>All rights reserved</span>
			</div>
			<div class="attr-link">
				| Powered by 
				<a :href="newsApiUrl" 
				    target="_blank">
					NewsAPI.org
				</a>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	data: function() {
		return {
			year: new Date().getFullYear(),
			newsApiUrl: 'https://newsapi.org/',
      		vueUrl: 'https://vuejs.org/'
		}
	},
	methods: {
		setCategory: function() {
			this.$store.dispatch('LOAD_ARTICLE_NEWS', category)
      		this.$store.commit('SET_CATEGORY', category)
		}
	}
};
</script>
