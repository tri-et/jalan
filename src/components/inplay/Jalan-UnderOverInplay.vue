<template>
  <div class="under-prediction" :style="bgover">
    <div class="icon">
      <img :src="bgover.imgUrl"/>
    </div>
      <div class="under-over">
        {{dataMatch.prediction.pick_ou=="O"?"over":"under"}}
      </div>
      <div>
        <span>&nbsp;{{`[${dataMatch.prediction.score_home}:${dataMatch.prediction.score_away}]`}}</span>
        <span>&nbsp;{{`${dataMatch.prediction.sys_hdp} @`}}</span>
      </div>
      <div>
        &nbsp;{{dataMatch.prediction.pick_ou=="O"?dataMatch.prediction.sys_odds_over:dataMatch.prediction.sys_odds_under}}
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
      bgover: {
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
    setgbOver() {
      let ou = parseFloat(this.dataMatch.prediction.sys_ou)
      let finalsocre = parseInt(this.dataMatch.score_home) + parseInt(this.dataMatch.score_away)
      if (this.dataMatch.match_period == 'FT') {
        switch (this.dataMatch.prediction.pick_ou) {
          case 'O':
            if (finalsocre > ou) {
              this.bgover = this.win
            } else if (finalsocre < ou) {
              this.bgover = this.lose
            } else {
              this.bgover = this.draw
            }
            break
          default:
            if (ou > finalsocre) {
              this.bgover = this.win
            } else if (ou < finalsocre) {
              this.bgover = this.lose
            } else {
              this.bgover = this.draw
            }
            break
        }
      }
    },
  },
  created() {
    this.setgbOver()
  },
}
</script>
<style lang="stylus" scoped>
.under-prediction
  display flex
  padding 6px 6px 6px 8px

  div
    display flex
    align-items center

  div:last-child
    flex 1
    justify-content flex-end

  div:nth-child(4)
    font-weight bold

.icon
  margin-right 8px

.under-over
  font-weight bold
  text-transform capitalize
</style>
