<template>
	<div class="main-news-wrapper">

    <transition-group name="list" class="carousel-container" tag="div">
		  <article class="article-container" v-for="(article, index) in articles" v-bind:key="index">
        <a v-bind:title="article.title" 
           v-bind:href="article.url" 
           target="_blank" 
           style="text-decoration:none">
          <figure class="figure-container">
            <img v-bind:src="article.urlToImage ? article.urlToImage : placeholder" 
                v-bind:alt="article.title" />
            <figcaption>
              <div class="overlay-title"><h3>{{ article.title }}</h3></div>
              <span class="overlay-source">source:&nbsp;{{ article.source.name }}</span>
            </figcaption>
          </figure>
          <div class="content-container">{{ article.description }}</div>
        </a>
      </article>
    </transition-group>

    <div class='carousel-controls'>
      <a v-on:click="previous">&#10094;</a>
      <a v-on:click="next">&#10095;</a>
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
      placeholder: 'http://placehold.it/640x480?text=N/A',
      timer: null
    }
  },
  mounted() {
    this.getPosts()
    this.initRotation()
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
      let first = this.articles.shift();
      this.articles = this.articles.concat(first);
    },
    previous: function() {
      let last = this.articles.pop();
      this.articles = [last].concat(this.articles);
    },
    initRotation: function() {
      this.timer = setInterval(this.next, 8000);
    }
  }
}
</script>

<style scoped>
.main-news-wrapper {
    max-width: 640px;
    max-height: 480px;
}
.carousel-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.article-container {
    display: flex;
    flex: 0 0 100%;
    background-color: #fff;
    transition: all 0.8s ease-in;
    left: 50%;
    transform: translateX(-50%);
}
.figure-container {
    position: relative;
    width: 640px;
    height: 420px;
}
.figure-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.figure-container .overlay-title {
    position: absolute;
    background: rgba(0,0,0,.30); 
    top: 0; left: 0;
    width: 100%;
    height: 13%;
}
.figure-container .overlay-title h3 {
    color: #f2f2f2;
    padding: 5px;
}
.figure-container .overlay-source {
    position: absolute;
    color: #fff;
    padding: 5px;
    bottom: 0; right: 0;
}

.carousel-controls {
    position: absolute;
    cursor: pointer;
    top: 0;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 42px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
}

.list-enter-active, .list-leave-active {
    transition: all 1s;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
    position: absolute;
}
.list-enter, .list-leave-to {
    opacity: 0;
    visibility: hidden;
}
</style>
