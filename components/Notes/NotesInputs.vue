<template>
  <div class="w-full">
    <div class="flex flex-col w-full mx-auto">
      <div class="mt-40">
        <div class="mb-12 text-center">
          <Question>Vos Notes</Question>
          <Subtitle>Ici renseigner les notes de vos 2 trimestres et celles des épreuves de première</Subtitle>
        </div>
        <div class="flex justify-center">
          <TableInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableInput from "@/components/Notes/TableInput";
import Question from "@/components/Form/Question";
import Subtitle from "@/components/Form/Subtitle";
  export default {
    components:{
      TableInput,Question,Subtitle
    }
  }
</script>

<style lang="scss" scoped>
</style>
