<template>
  <section class="section-wrapper">
    <!--<div v-for="(articles, index) in processedArticles" v-bind:key="index">-->
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
    <!--</div>-->
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
      articles: []
    }
  },
  mounted() {
    this.getPosts('sports')
  },
  methods: {
    getPosts(section) {
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

