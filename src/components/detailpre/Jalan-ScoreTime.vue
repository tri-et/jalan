<template>
  <div class="score-time">
    <div class="score">{{dataMatch.score_home}}</div>
    <div>
      <div class="minutes" :style="{'background-color':bgMinute}">95'</div>
      <div class="match-time" :style="{'background-color':bgTime}">Kickoff</div>
    </div>
    <div class="score">{{dataMatch.score_away}}</div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    dataMatch: [Object],
  },
  data() {
    return {
      bgMinute: '#F57676',
      bgTime: '#F57676',
    }
  },
  computed: {
    ...mapGetters('predictiondetail', ['getPredictionType']),
  },
  methods: {
    setBorderColor(value) {
      switch (value) {
        case 'pregame':
          this.bgMinute = '#5BB6E7'
          this.bgTime = '#C8E6F7'
          break
        case 'expired':
          this.bgMinute = '#767676'
          this.bgTime = '#F0F0F0'
          break
        default:
          this.bgMinute = '#F57676'
          this.bgTime = '#ffff'
      }
    },
  },
  watch: {
    getPredictionType(value) {
      this.setBorderColor(value)
    },
  },
}
</script>
<style lang="stylus" scoped>
.score-time
  display flex
  align-items center
  margin 0 8px

  div:nth-child(2)
    display grid
    flex 1
    justify-items center
    font-weight 700

    div
      width 70px
      height 35px
      display flex
      justify-content center
      align-items center

.minutes
  border-top-right-radius 35px
  border-top-left-radius 35px
  background-color #F57676

.match-time
  border-bottom-right-radius 35px
  border-bottom-left-radius 35px
  background-color #767676
  font-size 14pxx

.score
  font-size 28px
</style>
