<template>
  <div class="detail-inplay">
    <div class="toolbar">
      <i data-v-198aafa6="" class="material-icons">keyboard_backspace</i>
      <span>Back</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.toolbar
  height 50px
  background-color #ffffff
  box-shadow 0 4px 10px 0 rgba(0, 0, 0, 0.2)
  color #444
  align-items center
  padding-left 10px
  cursor pointer
  display none

.detail-inplay
  background-color #fff
  height 100%
  width 100%
  max-width 512px
  float right
  position relative

@media (max-width: 767px)
  .toolbar
    display flex
</style>
