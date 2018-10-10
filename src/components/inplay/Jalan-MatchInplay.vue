<template>
  <div class="match">
    <div v-if="match.match_period!=='FT'" class="live">
      <div></div>
      <div>
        <span>HT</span>
        <span>45'</span>
      </div>
    </div>
    <div v-else class="finished">
      <span>FT</span>
      <span>{{match.match_dt|filterDateTime}}</span>
    </div>
    <div class="team">
      <span>{{match.team_home}}</span>
      <span>{{match.team_away}}</span>
    </div>
    <div class="socre">
      <span>{{match.score_home}}</span>
      <span>{{match.score_away}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    match: [Object],
  },
  filters: {
    filterDateTime(value) {
      var date = new Date(value.replace(/-/g, '/'))
      return date.getHours() + ':' + (date.getMinutes() == 0 ? '00' : date.getMinutes())
    },
  },
}
</script>
<style lang="stylus" scoped>
.match
  display flex
  padding 8px 8px 8px 0

  div
    display grid
    grid-row-gap 5px

.team
  flex 1
  padding-left 8px

.finished
  text-align center
  padding-left 8px

  span:first-child
    font-weight bold

.live
  align-items center
  display flex !important

  div:nth-child(2)
    display grid
    padding-left 8px

  div:first-child
    width 6px
    height 12px
    background-color #34ec34c4
    border-top-right-radius 10px
    border-bottom-right-radius 10px
</style>
