<template>
  <fragment v-if="question.type === 'radio'">
    <VRadio
      class="mx-4"
      v-for="(option) in question.cards"
      :key="option.name"
      :value-name="option.name"
      v-model="activeValue"
      :background="checkBackgroundType(option.background)"
    />
  </fragment>
  <fragment v-else-if="question.type === 'checkbox'">
    <VCheckbox
      class="mx-4"
      v-for="(option, index) in question.cards"
      v-model="checkboxActiveValue"
      :question="question"
      :key="index"
      :index="index"
      :input-value="option.value"
      :label="option.name"
      :background="checkBackgroundType(option.background)"
    />
  </fragment>
</template>

<script>
import VRadio from "./VRadio";
import VCheckbox from "./VCheckbox";
import path from "path"
const validImgExtensions = new Set(['png', 'jpg', 'jpeg', 'svg'])
export default {
  props: ["question"],
  components: {
    VCheckbox,
    VRadio
  },
  methods: {
    checkBackgroundType(bg) {
      let result = validImgExtensions.has(path.extname(bg).slice(1).toLowerCase()) ? {type: "image", image: bg} : {type: "color", color: bg}
      console.log(result)
      return result
    }
  },
  data() {
    return {
      activeValue: "",
      checkboxActiveValue: []
    };
  },
  watch: {
    activeValue(newValue, oldValue) {
      let stateId = "set" + this.question.id;
      console.log("set -> stateId", stateId);
      this.$store.commit(stateId, newValue);
    },
    checkboxActiveValue(newValue, oldValue) {
      console.log(this.checkboxActiveValue);
      let stateId = "set" + this.question.id;
      console.log("set -> stateId", stateId);
      this.$store.commit(stateId, newValue);
    }
  }
};
</script>

<style lang="scss" scoped></style>
