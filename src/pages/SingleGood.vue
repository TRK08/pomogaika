<template>
  <div class="good-page__wrap">
    <div class="good-page" v-if="good && brands && !showList">
      <div class="container" v-if="good.crosses && good.crosses.length > 0">
        <div class="back-to-goods-list" @click="showList = !showList">
          <img src="../assets/img/breadcrumb-arrow.svg" alt="" />
          <span>К другим запчастям</span>
        </div>
        <h2 class="good-title">Информация о товаре</h2>
        <div class="good-info">
          <div class="col-sm-8 good-info-text">
            <h2 v-if="good.descr">{{ good.descr }}</h2>
            <div class="good-info-block">
              <div class="good-info-names">
                <span>Артикул: </span>
                <span>Производитель: </span>
                <span>Наличие: </span>
              </div>
              <div class="good-info-value">
                <span v-if="good.number">{{ good.number }} </span>
                <span v-if="good.brand">{{ good.brand || "test" }} </span>
                <span v-if="good.crosses.length"> В наличии </span>
                <span v-else> Нет в наличии</span>
              </div>
            </div>
          </div>
          <div class="col-sm-4 good-info-img">
            <img
              v-if="good.images && good.images.length"
              :src="`https://pubimg.4mycar.ru/images/preview/${good.images[0].name}`"
              :alt="good.descr"
            />
            <img v-else src="../assets/img/no-photo.jpg" :alt="good.descr" />
          </div>
        </div>
        <GoodPrices
          v-if="good.crosses.length"
          :goodCrosses="good.crosses"
          @addToCart="addToCart"
        />
      </div>
      <div class="container good-not-found__wrap" v-else>
        <div class="good-not-found">
          <h2>Данного товара нет в наличии</h2>
          <button @click="showList = !showList" class="btn-to-list">
            К списку товаров
          </button>
        </div>
      </div>
    </div>
    <div class="choose-good-block" v-else>
      <div class="container">
        <h1 @click="loadFromCatalog">Выберите из списка</h1>
        <ul v-if="brands">
          <li
            v-for="(brand, index) in brands"
            :key="index"
            @click="chooseGood(index)"
          >
            <span class="col-sm-4 col-xs-4"> {{ brand.brand }} </span>
            <span class="col-sm-2 col-xs-2"> {{ brand.number }} </span>
            <span class="col-sm-6 col-xs-6"> {{ brand.description }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoodPrices from "../components/GoodPrices.vue";
export default {
  components: { GoodPrices },
  name: "SingleGood",
  data() {
    return {
      goodNumber: 0,
      showList: false,
    };
  },
  methods: {
    addToCart(index) {
      let img = "";
      if (this.good && this.good.images.length) {
        img = `https://pubimg.4mycar.ru/images/preview/${this.good.images[0].name}`;
      }
      let goodInfo = {
        id: this.good.crosses[index].id,
        brand: this.good.crosses[index].brand,
        number: this.good.crosses[index].name,
        price: this.good.crosses[index].price,
        quantity: 1,
        image: img,
      };
      this.$store.dispatch("goods/ADD_TO_CART", goodInfo);
    },
    loadFromCatalog() {
      let path = this.$route.path.split("/");
      this.goodNumber = path[path.length - 1];
      this.$store.dispatch("goods/LIVE_SEARCH", this.goodNumber);
    },
    chooseGood(index) {
      setTimeout(() => {
        this.showList = false;
      }, 1500);
      this.$store.dispatch("goods/TAKE_GOOD_INDEX", index);
      this.$store.dispatch("goods/LOAD_GOODS");
    },
  },
  computed: {
    ...mapGetters({
      good: "goods/getGoods",
      brands: "goods/getBrands",
    }),
  },
  created() {
    this.$store.dispatch("goods/LOAD_GOODS");
  },
  mounted() {
    this.loadFromCatalog();
  },
};
</script>

<style scoped>
.good-info-text,
.good-info-img {
  padding: 0;
}

.good-info-text h2 {
  margin-bottom: 30px;
}

.choose-good-block ul li {
  padding: 15px 0;
  border-bottom: 1px solid #2c2c2c;
  cursor: pointer;
  display: flex;
}

.choose-good-block ul li:hover {
  background-color: #edecec;
}

.good-info-img img {
  width: 100%;
}

.choose-good-block {
  padding: 50px 0;
}

.good-not-found__wrap {
  padding-top: 100px;
  padding-bottom: 100px;
}

.good-not-found {
  text-align: center;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--yellow-color);
}

.btn-to-list {
  margin-top: 40px;
  padding: 12px;
  max-width: 500px;
  width: 50%;
  border: none;
  color: #fff;
  background-color: #000;
}

.back-to-goods-list {
  cursor: pointer;
  display: block;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

.back-to-goods-list img {
  transform: rotate(180deg);
  margin-right: 10px;
}

@media (max-width: 768px) {
  .good-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .good-info > div {
    padding: 0;
  }
}
@media (max-width: 672px) {
  .good-info {
    /* flex-direction: column; */
  }

  .good-info-block {
    margin-bottom: 30px;
  }

  .good-info-img {
    width: 35%;
  }
}
@media (max-width: 512px) {
  .good-info {
    flex-direction: column;
  }

  .good-info-img {
    width: 80%;
  }
}
</style>