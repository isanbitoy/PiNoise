<template>
  <section class="section-wrapper">

    <div class="panel-item">
      <a v-on:click="getPosts('')"><span class="item">All</span></a>
      <a v-on:click="getPosts('business')"><span class="item">Business</span></a>
      <a v-on:click="getPosts('entertainment')"><span class="item">Entertainment</span></a>
      <a v-on:click="getPosts('health')"><span class="item">Health</span></a>
      <a v-on:click="getPosts('science')"><span class="item">Science</span></a>
      <a v-on:click="getPosts('sports')"><span class="item">Sports</span></a>
      <a v-on:click="getPosts('technology')"><span class="item">Technology</span></a>
    </div>
    
    <transition-group name="grid-container" class="grid-container" tag="section">
      <article class="article-container" v-for="(article, index) in articles" v-bind:key="index">

      <content-loader v-if="!article.title"
          :speed="2"
          :animate="true"
      ></content-loader>
      <div v-else>
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
      </div>

      </article>
    </transition-group>

  </section>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { ContentLoader } from 'vue-content-loader'

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

/* build the website url*/
function buildUrl(url) {
  return BaseUrl + "&category=" + url + "&apiKey=" + ApiKey
}

export default {
  components: {
    ContentLoader
  },
  data() {
    return {
      articles: [],
      section: '',
      placeholder: 'http://placehold.it/320x213?text=N/A'
    }
  },
  mounted() {
    setTimeout(() => {
      this.getPosts(this.section)
    }, 200);
  },
  methods: {
    /*fetch news site api using axios*/
    getPosts: function(section) {
      let url = buildUrl(section);
      axios.get(url)
        .then((response) => {
          this.articles = response.data.articles;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style>
.section-wrapper {
    width: 100%;
    height: 100%;
}
.panel-item {
    position: relative;
    text-align: center;
    margin: 25px 0px 20px 0px;
}
.panel-item a {
    display: inline-flex;
    color: #a6a6a6;
    padding: 18px 20px;
    text-decoration: none;
    font-size: 20px;
}
.panel-item a:hover {
    color: #333;
}
.item {
    position: relative;
    cursor: pointer;
}
.item::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom;
    transition: transform 0.25s ease-out;
}
.item:hover::after {
    background-color: #333;
    transform: scaleX(1);
    transform-origin: bottom center;
}
.item:active {
    background-color: #eee;
    color: #019fc2;
    cursor: default;
}
.grid-container {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(160px, 320px));
    grid-auto-rows: repeat(auto-fit, minmax(auto, 1fr));
    justify-content: center;
    grid-auto-flow: dense;
}
.grid-container-enter-active, .grid-container-leave-active {
    transition: all 1.0s ease;
}
.grid-container-enter, .grid-container-leave-to {
    opacity: 0;
}
.article-container {
    width: 320px;
    background-color: #fff;
    transition: all 0.8s ease;
    border-radius: 2px;
    border: 1px solid #ededed;
}
.article-container a {
    text-decoration: none;
    cursor: pointer;
}
.figure-image img {
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: auto;
}
.figure-image figcaption {
    top: 0;
    left: 0;
    color: #444;
    background: #fff;
    background: rgba(255, 255, 255, 0.85);
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
}
</style>

