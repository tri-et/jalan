<template>
  <div class="inplay-prediction" :style="bginplay">
    <div class="icon">
      <img :src="bginplay.imgUrl"/>
    </div>
      <div class="team">
        <span class="team-marquee">
          {{dataMatch.pick_hdp=="H"?dataMatch.team_home.trim():dataMatch.team_away.trim()}}
        </span>
      </div>
      <div>
        <span>&nbsp;
          {{`[${dataMatch.prediction.score_home}:${dataMatch.prediction.score_away}] ${dataMatch.prediction.sys_hdp} @`}}
        </span>
      </div>
      <div>
        &nbsp;{{dataMatch.prediction.pick_hdp=='H'?dataMatch.prediction.sys_odds_home:dataMatch.prediction.sys_odds_away}}
      </div>
      <div>
        <span>Min 10'-20'</span>
      </div>
    </div>
</template>
<script>
import pred_gold from '@/assets/imgs/pred_gold.svg'
import lose_icon from '@/assets/imgs/lose_icon@1x.svg'
import win_icon from '@/assets/imgs/win_icon@1x.svg'
import draw_icon from '@/assets/imgs/draw_icon@1x.svg'
export default {
  props: {
    dataMatch: [Object],
  },
  data() {
    return {
      bginplay: {
        backgroundColor: '#FEE1E1',
        color: '#000',
        imgUrl: pred_gold,
      },
      lose: {
        imgUrl: lose_icon,
        backgroundColor: '#F0F0F0',
        color: 'rgba(51,51,51,.45)',
      },
      win: {
        imgUrl: win_icon,
        backgroundColor: '#69AE72',
        color: '#FFF',
      },
      draw: {
        imgUrl: draw_icon,
        backgroundColor: '#F0F0F0',
        color: 'rgba(51,51,51,.45)',
      },
    }
  },
  methods: {
    setbgInPlay() {
      let hdp = parseFloat(this.dataMatch.prediction.sys_hdp)
      let score_home = parseInt(this.dataMatch.score_home) + (hdp > 0 ? hdp : 0) - parseInt(this.dataMatch.prediction.score_home)
      let score_away =
        parseInt(this.dataMatch.score_away) + (hdp < 0 ? Math.abs(hdp) : 0) - parseInt(this.dataMatch.prediction.score_away)
      if (this.dataMatch.match_period == 'FT') {
        if (this.dataMatch.prediction.pick_hdp == 'H') {
          if (score_home > score_away) {
            this.bginplay = this.win
          } else if (score_home < score_away) {
            this.bginplay = this.lose
          } else {
            this.bginplay = this.draw
          }
        } else {
          if (score_away > score_home) {
            this.bginplay = this.win
          } else if (score_away < score_home) {
            this.bginplay = this.lose
          } else {
            this.bginplay = this.draw
          }
        }
      }
    },
  },
  created() {
    this.setbgInPlay()
  },
}
</script>
<style lang="stylus" scoped>
.inplay-prediction
  // background-color #69ae72
  display flex
  padding 5px 6px 5px 8px
  border-bottom 1px solid rgba(225, 225, 225, 0.34)

  div
    display flex
    align-items center
    white-space nowrap

  div:last-child
    flex 1
    justify-content flex-end

.icon
  margin-right 8px

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
