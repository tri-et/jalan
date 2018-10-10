<template>
  <div class="under-prediction-pregame">
    <div class="icon">
      <img src="../../assets/imgs/pred_gold.svg"/>
    </div>
      <div class="under-over">
        {{dataMatch.pick_ou=="O"?"over":"under"}}
      </div>
      <div>
        <span v-show="typeMatch==='FT'">&nbsp;[0:0]</span>
        <span>&nbsp; {{`${dataMatch.sys_hdp} @`}}</span>
        <span class="bold-odd">&nbsp;{{dataMatch.pick_ou=="O"?dataMatch.sys_odds_over:dataMatch.sys_odds_under}}</span>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    typeMatch: [String],
    dataMatch: [Object],
  },
}
</script>
<style lang="stylus" scoped>
.under-prediction-pregame
  background-color #C8E6F7
  display flex
  padding 6px 6px 6px 8px

  div
    display flex
    align-items center

.icon
  margin-right 8px

  img
    height 24px
    width 24px

.under-over
  font-weight bold
  text-transform capitalize

.bold-odd
  font-weight bold
</style>
