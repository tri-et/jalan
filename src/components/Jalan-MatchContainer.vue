<template>
  <div class="match-container" :style="{'border':dataMatch.id==getDataPrediction.id?'1px solid '+borderColor:''}" @click="openDetail()">
    <slot></slot>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  props: {
    type: {
      type: String,
      default: 'inplay',
    },
    dataMatch: [Object],
  },
  data() {
    return {
      borderColor: '#F57676',
    }
  },
  computed: {
    ...mapGetters('predictiondetail', ['getDataPrediction', 'getPredictionType']),
    ...mapState('predictiondetail', ['predictionType']),
  },
  methods: {
    ...mapActions('predictiondetail', ['setPredictionType', 'setDataPrediction']),
    openDetail() {
      this.setPredictionType(this.type)
      this.setDataPrediction(this.dataMatch)
      this.setBorder()
    },
    setBorder() {
      switch (this.type) {
        case 'pregame':
          this.borderColor = '#5BB6E7'
          break
        case 'expired':
          this.borderColor = '#767676'
          break
      }
    },
  },
  mounted() {
    this.setBorder()
  },
}
</script>
<style lang="stylus" scoped>
.match-container
  margin 0 8px 10px 8px
  box-shadow -1px -1px 8px 0 rgba(0, 0, 0, 0.2)
  font-size 14px
  cursor pointer
</style>
