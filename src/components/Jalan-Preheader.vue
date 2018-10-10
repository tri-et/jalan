<template>
  <div class="pre-header" :style="{'background-color':filterColor(type)}">{{label}}</div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: 'inplay',
    },
    type: {
      type: String,
      default: 'inplay',
    },
  },
  methods: {
    filterColor(val) {
      var color = ''
      switch (val) {
        case 'pregame':
          color = '#5BB6E7'
          break
        case 'expired':
          color = '#767676'
          break
        default:
          color = '#F57676'
      }
      return color
    },
  },
}
</script>
<style lang="stylus" scoped>
.pre-header
  color #fff
  font-size 16px
  text-shadow 0 1px 1px rgba(0, 0, 0, 0.54)
  display flex
  justify-content center
  text-transform uppercase
  background-color #F57676
  padding 15px 0px
  margin-top 10px
</style>
