<template>
  <div class="flex flex-col">
    <div class="mt-40" v-for="(question) in formData" :key="question.id">
      <div class="mb-12 text-center">
        <Question>{{ question.name }}</Question>
        <Subtitle>{{ question.subtitle }}</Subtitle>
      </div>
      <div class="flex justify-center">

      <FormWrapper v-model="activeValue" :question="question" />
      </div>
    </div>
    <pre><code>

    {{JSON.stringify(userChoices, 0, 2)}}
      </code></pre>
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
      formData: null,
      userChoices: {}
    };
  },

  async mounted() {
    this.formData = await axios
      .get(process.env.baseURL + "/form.json")
      .then(res => res.data);
    console.log(JSON.stringify(this.$store.state.responses,0, 2))

  },

  watch: {
  '$store.state.responses': function() {
    this.userChoices = this.$store.state.responses
    console.log(JSON.stringify(this.$store.state.responses,0, 2))
  }
}
};
</script>

<style lang="scss"></style>
