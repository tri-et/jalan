<template>
  <div class="company-over-under">
    <div class="company">
      <div>M8</div>
      <div>{{dataMatch.sys_ou|filterDash}}</div>
      <div>{{dataMatch.sys_odds_over|filterDash}}</div>
      <div>{{dataMatch.sys_odds_under|filterDash}}</div>
    </div>
    <div class="company">
      <div>SBO</div>
      <div>{{dataMatch.sbo_ou|filterDash}}</div>
      <div>{{dataMatch.sbo_odds_over|filterDash}}</div>
      <div>{{dataMatch.sbo_odds_under|filterDash}}</div>
    </div>
    <div class="company">
      <div>IBC</div>
      <div>{{dataMatch.ibc_ou|filterDash}}</div>
      <div>{{dataMatch.ibc_odds_over|filterDash}}</div>
      <div>{{dataMatch.ibc_odds_under|filterDash}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataMatch: [Object],
  },
  filters: {
    filterDash(val) {
      return val == '' ? '-' : val
    },
  },
}
</script>
<style lang="stylus" scoped>
.company-over-under
  background-color #fff
  display grid
  padding-left 15px

.company
  display grid
  grid-template-columns repeat(4, 1fr)
  justify-items center
  padding 15px 0

  div:first-child
    display flex
    font-weight 700
    width 100%

  div:nth-child(2)
    opacity 0.34
</style>
