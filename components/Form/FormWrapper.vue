<template>
  <div class="max-w-6xl mx-auto">
    <div class="relative w-full overflow-hidden">
      <div class="absolute top-0 left-0 z-10 w-12 h-full dp-swiper-gradient-l"></div>
      <div class="absolute top-0 right-0 z-10 w-12 h-full dp-swiper-gradient-r"></div>

      <template v-if="question.type === 'radio'">
        <!-- <swiper ref="mySwiper" :options="swiperOption" :instanceName="question.id"> -->
        <div v-swiper="swiperOption" instance-name="fourthSwiper">
          <div class="flex justify-center swiper-wrapper w-1/8">
            <VRadio
              class="mx-4 cursor-pointer select-none swiper-slide"
              v-for="option in question.cards"
              :key="option.name"
              :value-name="option.name"
              :item="option"
              v-model="activeValue"
              :background="checkBackgroundType(option.background)"
            />
          </div>
        </div>
        <!-- </swiper> -->
      </template>
      <template v-else-if="question.type === 'checkbox'">
        <div v-swiper="swiperOption" instance-name="fourthSwiper">
          <div class="flex justify-center swiper-wrapper w-1/8">
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
          </div>
        </div>
      </template>
      <!-- <div class="swiper-pagination"></div> -->
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
      swiperOption : {
        // loop: true,
        // init:false,
        // centeredSlides: true,
        // initialSlide:0,
        // slidesPerView: 3,
        // spaceBetween: 30,
        freeMode: true
        // pagination: {
        // loop: true,
        // slidesPerView: "auto",
        // loopedSlides: this.question.cards.length
        //   el: ".swiper-pagination",
        //   clickable: true
        // }
        // setWrapperSize: true
      }
    };
  },
  computed: {
    dynamicSwiperName() {
      return this.question.name;
    }
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
    console.log("Current Swiper instance object", this.mySwiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="scss" scoped>
.dp-swiper-gradient-l {
  background: linear-gradient(-90deg, transparent, #fff);
}
.dp-swiper-gradient-r {
  background: linear-gradient(90deg, transparent, #fff);
}
</style>
