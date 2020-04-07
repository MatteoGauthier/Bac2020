<template>
  <!-- <div class="mx-4 rounded-lg bac-card" v-bind:style="{ 'background-color':  option.card.bg }">
    <input :type="question.type" v-model="checked" :name="question.id" :id="option.card.name" :value="option.card.name" @input="submit" />
    <label :for="option.card.name" class="flex items-center justify-center h-full px-4 text-4xl font-medium leading-none text-center rounded-lg">
      {{option.card.name}}
    </label>
  </div>-->

  <fragment>
    <div v-if="question.type == 'checkbox'">
      <Vradio v-for="(item, index) in options" :key="`radio-${index}`" v-model="radioValue" :radio-option="radioOptions[index].value" :text="radioOptions[index].text"></Vradio>
    </div>
    <div v-else-if="question.type == 'radio'">
      <Vcheckbox v-for="(item, index) in options" :key="`checkbox-${index}`" v-model="checkboxOptions[index].value" :text="checkboxOptions[index].text"></Vcheckbox>
    </div>
  </fragment>
</template>

<script>
const isBinaryPath = require("is-binary-path");
export default {
  props: ['question','options'],
  mounted() {
    console.log(this.options)
  },
  data() {
    return {
      checkboxOptions: [
        { text: "Checkbox One", value: false },
        { text: "Checkbox Two", value: true }
      ],
      radioOptions: [
        { text: "Radio One", value: "One" },
        { text: "Radio Two", value: "Two" }
      ],
    }
  },
  methods: {
    submit: function() {
      this.$emit("inputData", this.checked);
      console.log('emit ' + this.checked)
    }
  },

  name: "Card"
};
</script>

<style lang="scss" scoped>
.bac-card {
  height: 168px;
  width: 312px;
}

input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  background: #2196f3;
  color: #fff;
  border-color: #2196f3;
}
</style>
