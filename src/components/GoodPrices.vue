<template>
  <div class="good-prices-component">
    <h2 class="good-prices-component-title">Цены:</h2>
    <div class="good-prices-table__wrap hidden-xs">
      <table class="good-prices-table">
        <thead>
          <td>Производитель</td>
          <td>Артикул</td>
          <td colspan="2">Описание</td>
          <td>Цена</td>
          <td>Купить</td>
        </thead>
        <tbody>
          <tr v-for="(item, index) in goodCrosses" :key="index">
            <td>{{ item.brand }}</td>
            <td>{{ item.name }}</td>
            <td colspan="2">{{ item.description }}</td>
            <td>{{ Math.round(+item.price) }} р.</td>
            <td>
              <button @click="addToCart(index)">Добавить в корзину</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="hidden-sm">
      <div
        class="good-prices-mobile"
        v-for="(item, index) in goodCrosses"
        :key="index"
      >
        <div class="good-mobile-brand">
          <p>Производитель</p>
          <span>{{ item.brand }}</span>
        </div>
        <div class="good-mobile-info">
          <div class="good-mobile-info-block">
            <p>Артикул</p>
            <span>{{ item.name }}</span>
          </div>
          <div class="good-mobile-info-block">
            <p>Описание</p>
            <span>{{ item.description }}</span>
          </div>
          <div class="good-mobile-info-block">
            <p>Цена</p>
            <span>{{ Math.round(+item.price) }} р.</span>
          </div>
          <div class="good-mobile-info-block">
            <p>Купить</p>
            <button @click="addToCart(index)">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodPrices",
  props: {
    goodCrosses: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(index) {
      this.$emit("addToCart", index);
    },
  },
};
</script>

<style scoped>
.good-prices-component-title {
  margin-bottom: 30px;
}

table {
  width: 100%;
  table-layout: fixed;
}

table tbody td {
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 400;
}
table td {
  padding: 15px;
}

table thead td:first-child,
table td:first-child {
  padding-left: 0;
}

table thead td:last-child {
  padding-left: 30px;
}

table td:last-child {
  padding-right: 0;
}

button {
  background-color: transparent;
  border: none;
  width: 100%;
}

.good-prices-mobile {
  padding: 10px 0;
  background-color: #f9f9f9;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
}

.good-mobile-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
}
.good-mobile-info-block {
  width: 150px;
}

.good-mobile-info-block > p,
.good-mobile-brand p {
  margin-bottom: 10px;
  font-weight: 500;
}

.good-mobile-info-block button {
  text-align: left;
  font-size: 11px;
  font-weight: 400;
}

@media (max-width: 512px) {
  .good-mobile-brand {
    margin-right: 5px;
  }

  .good-mobile-info {
    grid-gap: 10px;
  }

  .good-mobile-info-block {
    width: 120px;
  }

  .good-mobile-info-block > p,
  .good-mobile-brand p {
    margin-bottom: 5px;
  }
}

@media (max-width: 390px) {
  .good-mobile-info-block {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>