<template>
  <div>
    <div class="header-content">
      <h1>Philippines News Portal</h1>
      <h3>All fresh headlines from Philippines</h3>
    </div>
    <div class="div-line"></div>
    <nuxt/>
  </div>
</template>

<script>
import MainHeadline from '~/components/MainHeadline.vue'
export default {
    components: {
        MainHeadline
    }
}
</script>

<style>
html {
    font-family: Raleway, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 2.5em 10%;
    background-color: #f6f6f6;
}

*, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
h1, h2, h3 {
    color: #80ced6;
}
[v-cloak] {
    display: none;
}
.header-content {
    margin: 10px 0;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    background-color: #fff;
}
.div-line {
    position: relative;
}
.div-line::after {
    position: absolute;
    content: '';
    background-color: #80ced6;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
}
</style>

