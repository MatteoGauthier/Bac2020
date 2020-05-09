<template>
  <div class="flex flex-wrap w-full">
    <div class>
      <div v-for="(step, index) in steps.slice(0, -1)" :key="step.name" class="relative flex pb-10">

        <div class="absolute inset-0 flex flex-col items-center justify-center w-10 h-full">
          <div class="w-1 pointer-events-none h-3/4" :class="[(currentStep >= index +1) ? 'bg-blue-400' : 'bg-gray-300' ]"></div>
          <div class="w-1 pointer-events-none h-1/4" :class="[(currentStep >= index + 2) ? 'bg-blue-400' : 'bg-gray-300' ]"></div>
        </div>
        <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full" :class="[(currentStep >= index + 1) ? 'bg-blue-400' : 'bg-gray-300' ]"></div>
        <div class="step-text">
          <h2>{{step.name}}</h2>
          <!-- <p>{{getStepData(step.id)}}</p> --> <p>{{step.id}}</p>
        </div>
      </div>
      <div class="relative flex">
        <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full" :class="[(currentStep >= steps.length) ? 'bg-blue-400' : 'bg-gray-300' ]"></div>
        <div class="step-text">
          <h2>{{steps.slice(-1)[0].name}}</h2>
          <p>{{steps.slice(-1)[0].sub}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBar',
    props: ['currentStep', 'steps', 'status'],
    // Créer une méthode qui retourne la value de this.$store.state.responses correspondant à l'id du step (attention les state non pas les même nom)

  }
</script>

<style lang="postcss" scoped>
.step-text {
  @apply flex flex-col justify-center flex-grow pl-4;
}

.step-text p {
  @apply font-mono leading-3 text-gray-500;
}
.step-text h2 {
  @apply text-base font-medium leading-4 text-gray-800;
}
</style>
