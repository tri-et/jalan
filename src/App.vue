<template>
  <div id="app">
    <jalan-header />
    <router-view />
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  max-width 1280px
  margin auto
  height 100%
  position relative

  ::-webkit-scrollbar
    width 4px

  ::-webkit-scrollbar-track
    -webkit-box-shadow inset 0 0 6px rgba(255, 255, 255, 0.3)
    box-shadow 0 0 transparent
    outline none
    border none
    margin-top 16px

  ::-webkit-scrollbar-thumb
    border none
    border-radius 10px
    background linear-gradient(180deg, #cacaca 0%, rgba(255, 255, 255, 0) 50%)
</style>
