<template>
  <div>
    <div>
      <h1>Philippine News Portal</h1>
      <h3>All fresh headlines from Philippines</h3>
      <div class="div-line"></div>
    </div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 2.5em 12%;
}

*, *:before, *:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.div-line {
    position: relative;
}
.div-line::after {
    position: absolute;
    content: '';
    background: #d3d3d3;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
}
</style>

