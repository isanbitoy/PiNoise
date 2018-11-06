<template>
	<footer>
		<div class="footer-list">
			<div class="copyright">
				<span>&copy;</span>
				<span>{{ year }}</span>
				<span>All rights reserved</span>
			</div>
			<div class="attr-link">
				| Powered by 
				<a v-bind:href="newsApiUrl" target="_blank">
				NewsAPI.org</a>
			</div>
		</div>
	</footer>
</template>