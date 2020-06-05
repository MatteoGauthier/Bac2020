<template>
  <div class="max-w-6xl mx-auto">
    <div class="relative w-full overflow-hidden">
      <div class="absolute top-0 left-0 z-10 w-12 h-full dp-swiper-gradient-l"></div>
      <div class="absolute top-0 right-0 z-10 w-12 h-full dp-swiper-gradient-r"></div>
      <div v-swiper:mySwiper="swiperOption">
        <div class="flex justify-center swiper-wrapper w-1/8">
          <fragment v-if="question.type === 'radio'">
            <VRadio
              class="mx-4 cursor-pointer select-none swiper-slide"
              v-for="option in question.cards"
              :key="option.name"
              :value-name="option.name"
              :item="option"
              v-model="activeValue"
              :background="checkBackgroundType(option.background)"
            />
          </fragment>
          <fragment v-else-if="question.type === 'checkbox'">
            <VCheckbox
              class="mx-4 cursor-pointer select-none swiper-slide"
              v-for="(option, index) in question.cards"
              v-model="checkboxActiveValue"
              :question="question"
              :key="index"
              :index="index"
              :item="option"
              :input-value="option.value"
              :label="option.name"
              :background="checkBackgroundType(option.background)"
            />
          </fragment>
        </div>
            <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VRadio from "./VRadio";
import VCheckbox from "./VCheckbox";
import path from "path";
const validImgExtensions = new Set(["png", "jpg", "jpeg", "svg"]);
export default {
  props: ["question"],
  components: {
    VCheckbox,
    VRadio
  },
  methods: {
    checkBackgroundType(bg) {
      let result = validImgExtensions.has(
        path
          .extname(bg)
          .slice(1)
          .toLowerCase()
      )
        ? { type: "image", image: bg }
        : { type: "color", color: bg };
      // console.log(result)
      return result;
    }
  },
  data() {
    return {
      activeValue: "",
      checkboxActiveValue: [],
      swiperOption: {
        loop: true,
        // init:false,
        // centeredSlides: true,
        // initialSlide:1,
        slidesPerView: 3,
        spaceBetween: 30,
              pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        // setWrapperSize: true
      }
    };
  },
  watch: {
    activeValue(newValue, oldValue) {
      let stateId = "set" + this.question.id;
      // console.log("set -> stateId", stateId);
      this.$store.commit(stateId, newValue);
    },
    checkboxActiveValue(newValue, oldValue) {
      // console.log(this.checkboxActiveValue);
      let stateId = "set" + this.question.id;
      // console.log("set -> stateId", stateId);
      this.$store.commit(stateId, newValue);
    }
  },
  mounted() {
    // console.log("Current Swiper instance object", this.mySwiper);
    // this.mySwiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="scss" scoped>
.dp-swiper-gradient-l {
  background: linear-gradient(-90deg, transparent, #fff)
}
.dp-swiper-gradient-r {
  background: linear-gradient(90deg, transparent, #fff)
}</style>
