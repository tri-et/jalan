<template>
  <div class="company-odd-ou">
    <div class="company">
      <div>M8</div>
      <div>0.5</div>
      <div>0.97</div>
      <div>0.95</div>
    </div>
    <div class="company">
      <div>SBO</div>
      <div>0.5</div>
      <div>0.97</div>
      <div>0.95</div>
    </div>
    <div class="company">
      <div>IBC</div>
      <div>0.5</div>
      <div>0.97</div>
      <div>0.95</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.company-odd-ou
  background-color #fff
  display grid
  padding-left 15px

.company
  display grid 
  grid-template-columns repeat(4, 1fr)
  justify-items center
  padding 15px 0
  div:first-child
    display flex
    font-weight 700
    width 100%  
</style>
