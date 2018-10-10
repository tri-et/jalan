<template>
  <div class="jalan-header">
    <div class="logo">
      <img src="~/../assets/imgs/logo.jpg" />
    </div>
      <div class="menu-desk">
        <div class="item-menu active">
          <div>predictions</div>
          <div class="line"></div>
        </div>
        <div class="item-menu">
          <div>live score</div>
          <div class="line"></div>
        </div>
      </div>
      <div class="menu-mobi">
        <div class="item-menu active">
          <div>predictions</div>
          <div class="line"></div>
        </div>
        <div class="item-menu">
          <div>live score</div>
          <div class="line"></div>
        </div>
      </div>
      <div class="search">
        <div class="box-container" :class="{'box-container-active':isOpenSearch}">
          <div class="filter-league left-border">
            <span>Filter by League</span>
            <i data-v-abeee38c="" class="material-icons">expand_more</i>
          </div>
          <div class="box-search">
            <div class="left-border"><input placeholder="Search here" /></div>
            </div>
          </div>
          <div class="left-border icon-search" @click="isOpenSearch=!isOpenSearch">
            <i data-v-011ae4a6="" class="material-icons">{{isOpenSearch?'youtube_searched_for':'search'}}</i>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      isOpenSearch: false,
    }
  },
}
</script>
<style lang="stylus" scoped>
.jalan-header
  display flex
  height 64px
  background-color #444
  box-shadow 0 6px 4px -1px rgba(0, 0, 0, 0.2)
  z-index 2
  width 100%
  position relative
  align-items center
  color #fff

.menu-desk
  display flex

.menu-mobi
  display flex
  display none

.logo
  height 48px
  margin 0 8px

  img
    width 48px
    height 48px
    border-radius 8px

.line
  background-color #fff
  height 4px
  border-radius 5px
  margin 2px 10px 0 10px
  visibility hidden

.item-menu
  display grid
  margin-right 20px
  cursor pointer

  &:hover .line
    visibility visible

  div:first-child
    text-transform uppercase

.active .line
  background-color #ffffff
  visibility visible

.search
  flex 1
  display flex
  justify-content flex-end
  margin-left 8px

  div
    display flex
    align-items center
    justify-content center
    height 64px

    input
      border-radius 15px
      border none
      height 23px
      background-color #575757
      outline none
      color #fff
      padding-left 10px
      margin 0 10px

.box-container
  width 0
  transition width 0.3s, visibility 0.3s
  visibility hidden
  position absolute
  top 0
  right 66px
  overflow hidden

.box-container-active
  width 360px
  visibility visible

.filter-league
  padding 0 8px 0 10px
  overflow hidden
  white-space nowrap

.box-search
  display inline

.icon-search
  cursor pointer
  width 64px

.left-border
  border-left 1px solid rgba(#ffffff, 0.34)

@media (max-width: 767px)
  .search
    flex 0

  .line
    display none

  .menu-desk
    display none

  .menu-mobi
    display flex
    flex 1
    justify-content center

  .item-menu
    margin 0
    padding 9px 15px
    border 2px solid #fff
    color #a4a4a4

    &:hover
      background-color #fff
</style>
