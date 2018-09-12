<template>
	<div class="main-news-wrapper">
    <transition-group class="carousel-container" tag="section">
		  <article class="article-container" v-for="(article, index) in articles" v-bind:key="index">
        <a v-bind:title="article.title" v-bind:href="article.url" target="_blank">
          <figure class="figure-image">
            <img v-bind:src="article.urlToImage ? article.urlToImage : placeholder" 
                v-bind:alt="article.title" />
            <figcaption>
              <h4>{{ article.title }}</h4>
              <div>source:&nbsp;<span>{{ article.source.name }}</span></div>
            </figcaption>
          </figure>
        </a>
      </article>
    </transition-group>
    <div class='carousel-controls'>
      <button v-on:click="previous">&#60;</button>
      <button v-on:click="next">&#62;</button>
    </div>
	</div>
</template>

<script>
import axios from 'axios'

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

/* build the website url*/
function buildUrl() {
  return BaseUrl + "&apiKey=" + ApiKey
}

export default {
  data() {
    return {
      articles: [],
      placeholder: 'http://placehold.it/320x213?text=N/A'
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts: function() {
      let url = buildUrl();
      axios.get(url)
        .then((response) => {
          this.articles = response.data.articles;
        })
        .catch(error => {
          console.log(error);
        });
    },
    next: function() {
      const first = this.articles.shift();
      this.articles = this.articles.concat(first);
    },
    previous: function() {
      const last = this.articles.pop();
      this.articles = [last].concat(this.articles);
    }
  }
}
</script>

<style scoped>
.main-news-wrapper {
    max-width: 640px;
}
.carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.article-container {
    flex: 0 0 100%;
    display: flex;
    width: 640px;
    height: 320px;
    justify-content: center;
    transition: all .5s;
    background: #ddd;
}
.figure-image img {
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
}
</style>