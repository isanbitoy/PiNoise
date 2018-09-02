<template>
  <section class="section">
    <!--<div v-for="(articles, index) in processedArticles" v-bind:key="index">-->
    <div class="cont" v-for="(article, index) in articles" v-bind:key="index">
      <a v-bind:href="article.url" target="_blank">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img v-bind:src="article.urlToImage" v-bind:alt="article.title" />
            </figure>
          </div>
        </div>
        <div class="card-content">
          <div class="content">{{ article.title }}</div>
          <div>{{ article.description }}</div>
        </div>
      </a>
    </div>
    <!--</div>-->
  </section>
</template>

<script>
import axios from 'axios'
/*const newsAPI = 'https://newsapi.org/v2/top-headlines?country=ph&apiKey=643d0a34867c44cc9519671ec2e0dfbd'*/

const PHBaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

function buildUrl(url) {
  return PHBaseUrl + "&category=" + url + "&apiKey=" + ApiKey
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
    },

  },
  /*
  computed: {
    processedArticles() {
      let posts = this.articles;

      posts.map(post => {
        let imgObj = posts.urlToImage;
        post.image_url = imgObj ? imgObj.urlToImage : 'http://placehold.it/300x200?text=N/A';
      });
      let i, j, chunkedArray = [], chunk = 4;
      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    }
  }
  */
}
</script>

<style>
.container {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

