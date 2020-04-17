<template>
  <div @click="onChange()" class="p-5 border rounded-lg shadow" :class="[(value.includes(inputValue)) ? 'border-blue-600' : 'border-gray-300' ]">
    <input :ref="'checkbox-' + question.id+ '-' + index" :id="index" type="checkbox" class="hidden" :value="inputValue" @change="onChange" />
    {{label}}
  </div>
</template>
<script>
export default {
  methods: {
    onChange(e) {
      if (!e) {
        e = this.$refs['checkbox-' + this.question.id+ '-' + this.index]
        e.checked = !e.checked
      } else {
        e = e.target
      }
      let currentValue = [...this.value];
      if (e.checked) {
        currentValue.push(e.value);
      } else {
        currentValue = currentValue.filter(item => item !== e.value);
      }
      this.$emit("input", currentValue);
    }
  },
  props: {
    question: {
      type: Object
    },
    label: {
      type: String,
      required: true
    },
    index: {
      type: Number
    },
    inputValue: {
      type: String
    },
    value: {
      type: Array
    }
  }
};
</script>
