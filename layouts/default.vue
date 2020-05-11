<template>
  <div class="bac-page">
    <nuxt class="w-full h-full overflow-y-scroll" />
  </div>
</template>
<script>
import SidebarWrapper from '@/components/SideBar/SidebarWrapper'
export default {
  components: {
SidebarWrapper
  }
}
</script>

<style lang="scss">
$top-color: #9795f0;
$bottom-color: #fbc8d4fc;

.bac-page {
  height: 100vh;
  width: 100vw;

  padding: 0 15px ;

  border-top: 15px solid $top-color;
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from($top-color), to($bottom-color));
  background-image: -webkit-linear-gradient($top-color, $bottom-color);
  background-image: -moz-linear-gradient($top-color, $bottom-color), -moz-linear-gradient($top-color, $bottom-color);
  background-image: -o-linear-gradient($top-color, $bottom-color), -o-linear-gradient($top-color, transparent);
  background-image: linear-gradient($top-color, $bottom-color), linear-gradient($top-color, $bottom-color);
  border-bottom: 15px solid $bottom-color;
  -moz-background-size: 15px 100%;
  background-size: 15px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
}
</style>
