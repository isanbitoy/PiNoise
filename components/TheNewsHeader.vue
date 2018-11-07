<template>
  <header>
    <section class="news-banner">
      <div class="flag-container"/>
      <div class="banner-name">
        <div>
          <span>Pi</span>
          <span>Noise</span>
        </div>
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
     mounted: function() {
      this.interval = setInterval(() => {
        this.time()
      }, 1000)
    },
    methods: {
      time: function() {
        this.localeTime = moment().format('LTS').toLocaleString()
      }
    },
    beforeDestroy: function() {
      clearInterval(this.interval)
    }
};
</script>