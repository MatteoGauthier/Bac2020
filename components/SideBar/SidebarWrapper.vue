<template>
  <div>
    <div class="flex flex-col">
      <div>
        <div @click="doSomething('+')" id="bac-logo">Plus</div>
        <div @click="doSomething('-')" id="bac-subtitle">Minus</div>
      </div>
      <div>
        <ProgressBar :steps="3" :step="step"></ProgressBar>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";
export default {
  name: "SidebarWrapper",
  components: {
    ProgressBar
  },
  data() {
    return {
      step: 1
    };
  },
  methods: {
    doSomething(e) {

      e == '+' ? this.step++ : this.step--
    }
  }
};
</script>

<style lang="scss" scoped></style>
