<template>
  <div class="match">
    <div class="match-time">
      <span v-show="typeMatch==='FT'">FT</span>
      <span>{{match.match_dt|filterDateTime}}</span>
    </div>
    <div class="team">
      <span>{{match.team_home}}</span>
      <span>{{match.team_away}}</span>
    </div>
    <div v-if="typeMatch==='FT'" class="socre">
      <span>{{match.score_home}}</span>
      <span>{{match.score_away}}</span>
    </div>
    <div v-else class="live">
      Live
    </div>
  </div>
</template>
<script>
export default {
  props: {
    typeMatch: [String],
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

.match-time
  text-align center
  margin-left 8px
  align-items center

  span:first-child
    font-weight bold

.live
  color #69ae72
  font-weight bold
  align-content center
</style>
