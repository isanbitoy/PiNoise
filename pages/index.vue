<template>
  <section class="section-wrapper">

    <div class="panel-item">
      <a v-on:click="getShuffle"><span class="item fa fa-random"></span></a>
      <a v-on:click="getPosts('business')"><span class="item">Business</span></a>
      <a v-on:click="getPosts('entertainment')"><span class="item">Entertainment</span></a>
      <a v-on:click="getPosts('health')"><span class="item">Health</span></a>
      <a v-on:click="getPosts('science')"><span class="item">Science</span></a>
      <a v-on:click="getPosts('sports')"><span class="item">Sports</span></a>
      <a v-on:click="getPosts('technology')"><span class="item">Technology</span></a>
    </div>
    
    <transition-group name="grid-container" class="grid-container" tag="section">
      <div class="content" v-for="(article, index) in articles" v-bind:key="index">
        <a v-bind:href="article.url" target="_blank">
          <div class="card-image">
            <figure class="image">
              <img v-bind:src="article.urlToImage ? article.urlToImage :'http://placehold.it/320x213?text=N/A'" 
                v-bind:alt="article.title" width="320" height="213" />
              <figcaption>{{ article.title }}</figcaption>
            </figure>
          </div>
          <div class="card-content">
          <!--<div class="content">{{ article.description }}</div>-->
          </div>
        </a>
      </div>
    </transition-group>

  </section>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

/* build the website url*/
function buildUrl(url) {
  return BaseUrl + "&category=" + url + "&apiKey=" + ApiKey
}

export default {
  data() {
    return {
      articles: [],
      section: 'business'
    }
  },
  mounted() {
    this.getPosts(this.section)
  },
  methods: {
    /*fetch news site api using axios*/
    getPosts: function(section) {
      let url = buildUrl(section);
      axios.get(url)
        .then((response) => {
          this.articles = response.data.articles
        })
        .catch(error => {
          console.log(error)
        });
    },
    /*shuffle the articles using lodash*/
    getShuffle: function() {
      this.articles = _.shuffle(this.articles)
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
    margin: 10px 0px 10px 0px;
}
.panel-item > a {
    display: inline-flex;
    color: #A6A6A6;
    padding: 18px 20px;
    text-decoration: none;
    font-size: 20px;
}
.panel-item > a:hover {
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

.grid-container {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(320px, 320px));
    grid-auto-rows: 1fr;
    justify-content: center;
    grid-auto-flow: dense;
}
.grid-container-enter-active, .grid-container-leave-active {
    transition: all 1.0s ease;
}
.grid-container-enter, .grid-container-leave-to {
    opacity: 0;
}
.content {
    position: relative;
    width: 320px;
    transition: all 0.8s ease;
    border-radius: 6px;
    border: 2px solid #d3d3d3;
}
.content > a {
    text-decoration: none;
    cursor: pointer;
}
.image > figcaption {
    margin-left: 10px;
}
</style>

