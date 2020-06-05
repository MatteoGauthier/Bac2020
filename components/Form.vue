<template>
  <div class="w-full">
    <div class="flex flex-col w-full mx-auto">
      <div class="mt-40" v-for="(question) in formData" :key="question.id">
        <div class="mb-12 text-center">
          <Question>{{ question.name }}</Question>
          <Subtitle>{{ question.subtitle }}</Subtitle>
        </div>
          <FormWrapper v-model="activeValue" :question="question" />
      </div>
      <!-- <pre><code>

    {{JSON.stringify(userChoices, 0, 2)}}
      </code></pre> -->
    </div>
  </div>
</template>

<script>
import Question from "./Form/Question";
import Subtitle from "./Form/Subtitle";
import FormWrapper from "./Form/FormWrapper";
import axios from "axios"
export default {
  name: "Form",
  components: {
        Question,
    Subtitle,
    FormWrapper
  },

  data() {
    return {
      activeValue: "",
      userChoices: {}
    };
  },
  computed: {
    formData() {
      return this.$store.state.formData
    }
  },

  watch: {
  '$store.state.responses': function() {
    this.userChoices = this.$store.state.responses
    // console.log(this.$store.getters.getUserVoie)
    console.log(JSON.stringify(this.$store.state.responses,0, 2))
  }
}
};
</script>

<style lang="scss"></style>
