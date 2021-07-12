<template>
  <div class="car-brands-list wow fadeInDown" v-if="brands">
    <div class="container">
      <h2 class="car-brands-title">Каталог автозапчастей</h2>
      <div class="car-brands__wrap">
        <a
          :href="brand.link"
          class="car-brands-item col-sm-3 col-xs-4"
          target="_blank"
          v-for="brand in brands.slice(0, itemsToShow)"
          :key="brand.name"
        >
          {{ brand.name }}
        </a>
      </div>
      <div class="car-brands-load-more" v-if="itemsToShow < brands.length">
        <button class="car-brands-btn" @click="loadMoreBrands">
          Все модели
        </button>
        <img src="../assets/img/down-arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CarBrandsList",
  data() {
    return {
      itemsToShow: 12,
    };
  },
  computed: {
    ...mapGetters({
      brands: "catalog/getCarBrands",
    }),
  },
  created() {
    this.$store.dispatch("catalog/LOAD_BRANDS");
  },
  methods: {
    loadMoreBrands() {
      this.itemsToShow = this.brands.length;
    },
  },
};
</script>

<style scoped>
.car-brands-list {
  margin-bottom: 70px;
}

.car-brands-title {
  margin-bottom: 30px;
}

.car-brands-item {
  margin-bottom: 30px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.car-brands-item:hover {
  color: var(--yellow-color);
  transition: all 0.3s ease;
}

.car-brands-load-more {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.car-brands-btn {
  background-color: transparent;
  border: none;
  color: var(--yellow-color);
  font-size: 20px;
  line-height: 21px;
}

.car-brands-load-more img {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
</style>