<template>
  <div class="tab-odd-ou" :style="{'background-color':bgColor}">
    <div v-for="(label,index) in data" :key="index">{{label}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    data: [Array]
  },
  data() {
    return {
      bgColor: "#F57676"
    };
  },
  computed: {
    ...mapGetters("predictiondetail", ["getPredictionType"])
  },
  methods: {
    setBorderColor(value) {
      switch (value) {
        case "pregame":
          this.bgColor = "#5BB6E7";
          break;
        case "expired":
          this.bgColor = "#767676";
          break;
        default:
          this.bgColor = "#F57676";
      }
    }
  },
  watch: {
    getPredictionType(value) {
      this.setBorderColor(value);
    }
  }
};
</script>
<style lang="stylus" scoped>
.tab-odd-ou
  display grid
  grid-template-columns repeat(4, 1fr)
  text-transform uppercase
  font-size 12px
  padding 20px 0
  color #fff
  align-items center
  justify-items center
  padding-left 15px

  div:first-child
    display flex
    font-size 16px
    font-weight 700
    width 100%
</style>
