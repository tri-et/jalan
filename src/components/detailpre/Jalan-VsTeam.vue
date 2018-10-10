<template>
  <div class="vs-team">
    <div class="team">
      <div>{{dataMatch.team_home}}</div>
      <div>vs</div>
      <div>{{dataMatch.team_away}}</div>
    </div>
    <div>System Prediction recommended pick:</div>
  </div>
</template>
<script>
export default {
  props: {
    dataMatch: [Object],
  },
}
</script>
<style lang="stylus" scoped>
.vs-team
  display grid
  padding 5px 8px

  >div:nth-child(2)
    color rgba(0, 0, 0, 0.34)
    font-size 14px
    text-align center
    margin 10px 0

.team
  display flex

  div:nth-child(2)
    text-align center
    color rgba(0, 0, 0, 0.34)

  div:first-child, div:last-child
    flex 1

  div:last-child
    text-align right
</style>
