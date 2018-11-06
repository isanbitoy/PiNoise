<template>
  <header id="news-header">
    <section class="news-banner">
      <div class="flag-container"/>
      <div class="banner-name">
        <div><span>Pi</span><span>Noise</span></div>
        <div>All Pinoy News</div>
      </div>
    </section>
    <section class="news-date">
      <span>Philippine Standard Time:</span>
      <span>{{ date | moment("dddd, MMMM Do, YYYY") }}</span>
      <span>{{ localeTime }}</span> 
    </section>
  </header>
</template>
<script>
let moment = require('moment')
export default {
    data: function() {
      return {
        date: new Date(),
        localeTime: '',
        interval: ''
      }
    },
    methods: {
      time: function() {
        this.localeTime = moment().format('LTS').toLocaleString()
      }
    },
    mounted: function() {
      this.interval = setInterval(() => {
        this.time()
      }, 1000)
    },
    beforeDestroy: function() {
      clearInterval(this.interval)
    }
};
</script>
<style scoped>
#news-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    background: #222;
    padding: 1em 0;
}
.news-banner {
    flex: 1 1 auto;
    display: inline-flex;
    align-self: center;
    justify-content: center;
}
.flag-container {
    background-image: url('../assets/svg/ph.svg');
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: content-box;
    border: 1px solid #fff;
    /*border-radius: 4px;*/
    width: 3em;
    padding: 8px;
}
.banner-name {
    color: #fff;
    margin: 0 6px;
    cursor: pointer;
}
.banner-name div:last-child {
    font-size: 17px;
}
.banner-name > div span:first-child {
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1px;
}
.banner-name > div span:last-child {
    font-size: 25px;
    letter-spacing: -2px;
}
.news-date {
    flex: 1 1 auto;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 2.0em;
    margin-top: 12px;
    user-select: none;
}
.news-date span {
    color: #fff;
    text-align: center;
}
</style>