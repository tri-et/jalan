<template>
  <div class="pregame-prediction">
    <div class="icon">
      <img src="../../assets/imgs/pred_gold.svg"/>
    </div>
      <div class="team">
        <span class="team-marquee">
          {{dataMatch.pick_hdp=="H"?dataMatch.team_home.trim():dataMatch.team_away.trim()}}
        </span>
      </div>
      <div>
        <span v-show="typeMatch==='FT'">&nbsp;[0:0]</span>
        <span>&nbsp;{{`${dataMatch.sys_hdp} @ ${(dataMatch.pick_hdp=="H"?dataMatch.sys_odds_home:dataMatch.sys_odds_away)}`}}</span>
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
.pregame-prediction
  background-color #C8E6F7
  display flex
  padding 6px 6px 6px 8px
  border-bottom 1px solid rgba(0, 0, 0, 0.1)

  div
    display flex
    align-items center
    white-space nowrap

.icon
  margin-right 8px

  img
    width 24px
    height 24px

.team
  font-weight bold
  max-width 110px
  width 100%
  overflow hidden
  position relative

.team-marquee
  position absolute
  animation animate1 5s linear infinite

.test
  width 100px
  height 50px
  white-space nowrap
  overflow hidden
  overflow-x -webkit-marquee
  -webkit-marquee-direction forwards
  -webkit-marquee-style scroll
  -webkit-marquee-speed normal
  -webkit-marquee-increment small
  -webkit-marquee-repetition 5
  overflow-x marquee-line
  marquee-direction forward
  marquee-style scroll
  marquee-speed normal
  marquee-play-count 5

@keyframes animate1
  0%
    left 100%

  100%
    left -100%
</style>
