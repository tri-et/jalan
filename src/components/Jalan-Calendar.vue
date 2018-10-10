<template>
  <div class="calendar">
    <div class="arrow-left">
      <i class="material-icons">keyboard_arrow_left</i>
    </div>
    <div class="calendar-container">
      <div v-for="(item,index) in dates" :key="index" :class="{'active-date':index==activeDate,'futuredates':index>15}" v-on:click="selectDate($event,index)">
        <span>{{item|date}}</span>
        <span>{{item|day}}</span>
      </div>
    </div>
    <div class="arrow-right">
      <i class="material-icons">keyboard_arrow_right</i>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      dates: [],
      activeDate: 15,
    }
  },
  filters: {
    date(val) {
      var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return month_names_short[val.getMonth()] + ' ' + val.getDate()
    },
    day(val) {
      var day_names_short = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      let today = new Date()
      if (val.getFullYear() == today.getFullYear() && val.getMonth() == today.getMonth() && val.getDate() == today.getDate()) {
        return 'Today'
      }
      return day_names_short[val.getDay()]
    },
  },
  methods: {
    renderDates() {
      var dateOfmonth = []
      for (var i = 16; i--; ) {
        var today = new Date()
        var preday = today.setDate(today.getDate() - i)
        dateOfmonth.push(new Date(preday))
      }
      var current = new Date()
      for (var j = 0; j < 15; j++) {
        var nextday = current.setDate(current.getDate() + 1)
        dateOfmonth.push(new Date(nextday))
      }
      this.dates = dateOfmonth
    },
    selectDate(event, index) {
      var outer = this.$el.querySelector('.calendar-container')
      this.activeDate = index
      $(outer).animate({scrollLeft: event.target.offsetLeft - outer.offsetWidth / 2})
    },
    setDateCenterResizing() {
      var outer = this.$el.querySelector('.calendar-container')
      var inner = this.$el.querySelector('.active-date')
      outer.scrollLeft = inner.offsetLeft - outer.offsetWidth / 2 + inner.offsetWidth / 4
    },
  },
  created() {
    var me = this
    this.renderDates()
    this.$root.$on('browserResize', function(data) {
      me.setDateCenterResizing()
    })
  },
}
</script>
<style lang="stylus" scoped>
.calendar
  background-color #212121
  display flex
  align-items center
  color #fff
  max-width 768px
  width 100%

.arrow-left, .arrow-right
  align-items center
  display flex
  height 100%

.calendar-container
  display flex
  font-size 14px
  height 64px
  width 100%
  overflow hidden
  -webkit-overflow-scrolling touch

  div
    display grid
    padding 16px
    text-align center
    grid-row-gap 3px
    color #4e4e4e

    &:not(.futuredates):hover
      color #fff
      background-color #333
      cursor pointer

    span
      white-space nowrap

.active-date
  background-color #333
  color #fff !important
  font-weight bold
</style>
