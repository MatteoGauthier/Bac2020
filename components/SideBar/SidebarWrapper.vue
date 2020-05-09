<template>
  <div>
    <div class="flex flex-col">
      <div>
        <button @click="doSomething('+')" id="bac-logo">Plus</button>
        <button @click="doSomething('-')" id="bac-subtitle">Minus</button>
      </div>
      <div>
        <ProgressBar :steps="stepsText" :status="this.$store.state.responses" :currentStep="step"></ProgressBar>
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
  computed: {
    stepsText() {
      return this.$store.state.formData.map(element =>
        Object.assign({}, ...['name','type', 'id'].map(key => ({ [key]: element[key] })))
      );
    }
  },
  methods: {
    doSomething(e) {
      e == "+" ? this.step++ : this.step--;
    }
  }
};
</script>

<style lang="scss" scoped></style>
