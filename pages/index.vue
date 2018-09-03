<template>
  <section class="section-wrapper">

    <div class="categories">
      <a class="panel-item" ><span class="item fa fa-random"></span></a>
      <a class="panel-item" v-on:click="getPosts('business')"><span class="item">Business</span></a>
      <a class="panel-item" v-on:click="getPosts('entertainment')"><span class="item">Entertainment</span></a>
      <a class="panel-item" v-on:click="getPosts('health')"><span class="item">Health</span></a>
      <a class="panel-item" v-on:click="getPosts('science')"><span class="item">Science</span></a>
      <a class="panel-item" v-on:click="getPosts('sports')"><span class="item">Sports</span></a>
      <a class="panel-item" v-on:click="getPosts('technology')"><span class="item">Technology</span></a>
    </div>
    
    <transition-group class="grid-content">
      <div class="container" v-for="(article, index) in articles" v-bind:key="index">
        <a v-bind:href="article.url" target="_blank">
        <div class="card-image">
          <figure class="image">
            <img v-bind:src="article.urlToImage" v-bind:alt="article.title" width="300" height="200" />
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

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

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
    getPosts: function(section) {
      let url = buildUrl(section);
      axios.get(url)
        .then((response) => {
          this.articles = response.data.articles
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
}
</script>

<style>
.section-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}
.filter-categories {
    margin: 10px 0px 10px 0px;
}
.panel-item {
    display: inline-flex;
    color: #A6A6A6;
    text-align: center;
    justify-content: center;
    padding: 18px 20px;
    text-decoration: none;
    font-size: 20px;
}
.panel-item:hover {
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
.grid-content {
    display: grid;
    grid-gap: 6px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    grid-auto-rows: 1fr;
    grid-auto-flow: dense;
}
.container {
    position: relative;
    box-sizing: border-box;
    border: 1px solid #d3d3d3;
}
.card-content {
    position: absolute;
    width: 300px;
}
</style>

