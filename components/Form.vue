<template>
  <div>
    <div
      class="py-8 mx-auto md:flex md:flex-row md:flex-wrap"
      v-for="question in formData"
      :key="question.id"
    >
      <FormWrapper v-model="activeValue" :question="question"/>
    </div>
  </div>
</template>

<script>
import FormWrapper from "./Form/FormWrapper";
import axios from "axios"
export default {
  name: "Form",
  components: {
    FormWrapper
  },

  data() {
    return {
      activeValue: "",
      formData: null
    };
  },

  async mounted() {
    this.formData = await axios
      .get(process.env.baseURL + "/form.json")
      .then(res => res.data);
  },

  watch: {
    activeValue: function(el) {
      console.log(el);
    }
  }
};
</script>

<style lang="scss"></style>
