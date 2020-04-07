<template>
  <div class="v-input-radio">
    <input :id="_uid" v-model="internalValue" type="radio" :value="radioOption" />
    <label :for="_uid">{{ text }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    radioOption: String,
    text: String
  },

  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
