<template>
  <div class="bg-smart-gray">
    <div class="flex flex-col p-4">
      <div class="mb-3 leading-none">
        <h1 class="font-extrabold text-xxl text-dark-purple">Bac 2020.</h1>
        <span class="text-xs text-indigo-900">Calcul tes notes de bac facilement</span>
      </div>
      <p class="text-xs italic leading-none text-indigo-800 opacity-50">C’est simple , tu suis les indications présentes à l’écran et tu pourras voir ta note du bac avec ta mention (on te réserve aussi une petite surprise à la fin).</p>
      <div class="mt-8">
        <ProgressBar :steps="stepsText" :status="this.$store.state.responses" :currentStep="step"></ProgressBar>
        <div class="flex justify-center w-full py-2 font-semibold bg-gray-200 rounded-md text-36">
          <span class="pr-2 text-gray-500">~</span>
          <span class="pr-2 text-gray-400">/</span>
          <span class="text-gray-500">20</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";
import {mapGetters} from 'vuex'
export default {
  name: "SidebarWrapper",
  components: {
    ProgressBar
  },
  computed: {
    stepsText() {
      return this.$store.state.formData.map(element =>
        Object.assign(
          {},
          ...["name", "type", "id", "cards"].map(key => ({
            [key]: element[key]
          }))
        )
      );
    },
    ...mapGetters({
      step: "getCurrentStep"
    })
  },
  methods: {
    doSomething(e) {
      e == "+" ? this.step++ : this.step--;
    }
  }
};
</script>

<style lang="scss" scoped></style>
