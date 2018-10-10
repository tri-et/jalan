<template>
  <div class="pre-league">
    <div class="icon-league"></div>
    <span>{{league}}</span>
  </div>
</template>
<script>
export default {
  props: {
    league: [String],
  },
}
</script>
<style lang="stylus" scoped>
.pre-league
  display flex
  align-items center
  height 48px

  span
    color rgba(0, 0, 0, 0.54)
    font-size 12px
    text-transform uppercase

.icon-league
  height 24px
  width 8px
  border-radius 4px
  background-color #5700af
  box-shadow 0 2px 3px 0 rgba(0, 0, 0, 0.34)
  margin 0 8px
</style>
