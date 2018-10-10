<template>
  <div class="prediction-detail" :style="{'background-color':bgColor}">
    <div>
      <img src="../../assets/imgs/pred_gold.svg"/>
    </div>
      <div>Avispa Fukuoka</div>
      <div>[1:0] 0.25 @ 0.94</div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      bgColor: '#F57676',
    }
  },
  computed: {
    ...mapGetters('predictiondetail', ['getPredictionType']),
  },
  methods: {
    setBorderColor(value) {
      switch (value) {
        case 'pregame':
          this.bgColor = '#C8E6F7'
          break
        case 'expired':
          this.bgColor = '#F0F0F0'
          break
        default:
          this.bgColor = '#F57676'
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
.prediction-detail
  display flex
  height 54px
  border-radius 10px
  box-shadow 0 8px 12px 0 rgba(0, 0, 0, 0.17)
  position absolute
  right 15px
  left 15px
  top 183px
  margin auto
  align-items center
  z-index 3

  div:first-child
    width 28px
    height 28px
    margin 0 8px

    img
      width 28px
      height 28px

  div:nth-child(2)
    font-weight bold
    margin-right 5px

@media (max-width: 767px)
  .prediction-detail
    top 233px
</style>
