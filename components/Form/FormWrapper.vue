<template>
  <fragment v-if="question.type === 'radio'">
    <VRadio
      class="mx-5"
      v-for="item in question.cards"
      :key="item.name"
      :value-name="item.name"
      v-model="activeValue"
    />
  </fragment>
  <fragment v-else-if="question.type === 'checkbox'">
    <VCheckbox
      class="mx-5"
      v-for="(option, index) in question.cards"
         v-model="checkboxActiveValue"
         :question="question"
         :key="index"
         :index="index"
         :input-value="option.value"
         :label="option.name"
    />
  </fragment>
</template>

<script>
import VRadio from "./VRadio";
import VCheckbox from "./VCheckbox";
export default {
  props: ["question"],
  components: {
    VCheckbox,VRadio
  },
  mounted() {
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
      console.log(this.checkboxActiveValue)
      let stateId = "set" + this.question.id;
      console.log("set -> stateId", stateId);
      this.$store.commit(stateId, newValue);
    }
  }
};
</script>

<style lang="scss" scoped></style>
