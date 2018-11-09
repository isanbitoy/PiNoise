<template>
	<nav>
		<ul class="breadcrumb">
			<li><a href="#business"><span @click="setCategory('business')">Business</span></a></li>
			<li><a href="#health"><span @click="setCategory('health')">Health</span></a></li>
      		<li><a href="#science"><span @click="setCategory('science')">Science</span></a></li>
      		<li><a href="#sports"><span @click="setCategory('sports')">Sports</span></a></li>
      		<li><a href="#technology"><span @click="setCategory('technology')">Technology</span></a></li>
		</ul>
	</nav>
</template>
<script>
export default {
	methods: {
		setCategory: function(category) {
			this.$store.dispatch('LOAD_ARTICLE_NEWS', category)
		}
	}
};
</script>