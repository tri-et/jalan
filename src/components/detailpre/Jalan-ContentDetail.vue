<template>
  <div class="content-detail">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.content-detail
  margin-top 29px
  height 100%
  max-height calc(100% - 275px)
  overflow-x hidden
  -webkit-overflow-scrolling touch
</style>
