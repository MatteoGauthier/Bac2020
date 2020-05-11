<template>
  <div class="flex flex-wrap w-side-xl">
    <div class>
      <div v-for="(step, index) in steps" :key="step.name" class="relative flex pb-10 last:pb-0">
        <fragment v-if="step !== steps[steps.length - 1]">
          <div class="absolute inset-0 flex flex-col items-center justify-center w-10 h-full">
            <div class="w-1 pointer-events-none h-3/4" :class="[
                currentStep >= index + 1 ? 'bg-blue-400' : 'bg-gray-300'
              ]"></div>
            <div class="w-1 pointer-events-none h-1/4" :class="[
                currentStep >= index + 2 ? 'bg-blue-400' : 'bg-gray-300'
              ]"></div>
          </div>
          <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bac-dot-side" :class="[currentStep >= index + 1 ? 'bg-blue-400' : 'bg-gray-300']"></div>
          <div class="step-text">
            <h2>{{ step.name }}</h2>
            <p>{{ getStepData(step.id) }}</p>
          </div>
        </fragment>
        <fragment v-else>
          <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bac-dot-side" :class="[
              currentStep >= steps.length ? 'bg-blue-400' : 'bg-gray-300'
            ]"></div>
          <div class="step-text">
            <h2>{{ step.name }}</h2>
            <p>{{ getStepData(step.id) }}</p>
          </div>
        </fragment>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["currentStep", "steps", "status"],
  mounted() {
    // console.log(this.steps);
    // console.log(this.status);
    // console.log(this.currentStep);
  },
  // Créer une méthode qui retourne la value de this.$store.state.responses correspondant à l'id du step (attention les state non pas les même nom)
  methods: {
    getStepData(id) {
      switch (id) {
        case "UserVoie":
          return this.$store.state.responses.voie;
        case "UserFilliere":
          return this.$store.state.responses.filliere;
        case "UserSpe":
          return this.$store.state.responses.spe;
        case "UserOptions":
          // let result = this.steps
          //   .filter((i, index) => {
          //     return i.id.includes("UserOptions");
          //   })[0]
          //   .cards.filter((e, index) => {
          //     return e.value.includes(
          //       this.$store.state.responses.options[index]
          //     );
          //   })
          //   .map(el => el.name).join(', ')

          let result =  this.$store.state.responses.options.map(x => {

            if (x == "optionSport") return "Option Sport"
            if (x == "classeEuro") return "Classe Euro"
            if (x == "otherOption") return "Optionnns"
          }
          ).join(', ')
          console.log(result)
          return result
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.step-text {
  @apply flex flex-col justify-start pt-1 flex-grow;
}

.step-text p {
  @apply font-mono leading-4 text-gray-500;
  width: 100%;
  text-overflow: ellipsis;
}

.step-text h2 {
  @apply text-base font-medium leading-4 text-gray-800;
  padding-bottom: 2px;
}

.bac-dot-side {
  @apply mr-3
}
</style>
