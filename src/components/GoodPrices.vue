<template>
  <div class="good-prices-component">
    <h2 class="good-prices-component-title">Цены:</h2>
    <div class="good-prices-table__wrap">
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
            <td v-if="item.brand">{{ item.brand }}</td>
            <td v-if="item.number">{{ item.number }}</td>
            <td colspan="2"></td>
            <td></td>
            <td>
              <button @click="addToCart(index)">Добавить в корзину</button>
            </td>
          </tr>
        </tbody>
      </table>
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

table td button {
  background-color: transparent;
  border: none;
  width: 100%;
}
</style>