<template>
  <div class="v-input-checkbox">
    <input :id="_uid" v-model="internalValue" type="checkbox" />
    <label :for="_uid">{{ text }}</label>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    value: Boolean
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
