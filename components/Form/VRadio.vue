<template>
    <div @click="updateActiveValue" class="p-5 border rounded-lg shadow" :class="[(this.activeValue == this.valueName) ? 'border-blue-600' : 'border-gray-300' ]" @keydown.space="updateActiveValue">
      {{this.valueName}}
    </div>
</template>

<script>
// v-if="this.activeValue === this.valueName"
export default {
  model: {
    prop: 'activeValue',
    event: 'onUpdateValue'
  },
  props: ['valueName', 'activeValue'],
  methods: {
    updateActiveValue() {
      console.log("radioUpdate")
      this.$emit('onUpdateValue', this.valueName)
    }
  }
}
</script>
