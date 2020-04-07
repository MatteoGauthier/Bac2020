<template>
  <div>
    <div class="mt-40 border" v-for="(question, qIndex) in formData" :key="question.name">
      <div class="mb-12 text-center">
        <Question>{{ question.question }}</Question>
        <Subtitle>{{ question.subtitle }}</Subtitle>
      </div>
      <div class="flex justify-center">
        <Cards v-for="(card, index) in question.cards" v-model="checked" :key="card.name" @click="updateState(qIndex, index)" :question="question" :options="{card,index}"/>
        {{checked}}
      </div>
    </div>
  </div>
</template>

<script>
import Question from "./Form/Question";
import Subtitle from "./Form/Subtitle";
import axios from 'axios'
import Cards from "./Form/Cards";
export default {
  name: "Form",
  components: {
    Question,
    Subtitle,
    Cards
  },
  data() {
    return {
      formData: null
    }
  },
  async mounted() {
    this.formData = await axios
      .get(process.env.baseURL + "/form.json")
      .then(res => res.data);
  },
};
</script>

<style lang="scss" scoped></style>
