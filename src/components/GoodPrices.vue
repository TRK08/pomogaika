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
          <tr>
            <td>Nissan</td>
            <td>65894481</td>
            <td colspan="2">Хороший, вместительный бак на 100 литров</td>
            <td>10 000 рублей</td>
            <td><button>Добавить в корзину</button></td>
          </tr>
          <tr>
            <td>Nissan</td>
            <td>65894481</td>
            <td colspan="2">Хороший, вместительный бак на 100 литров</td>
            <td>10 000 рублей</td>
            <td><button>Добавить в корзину</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodPrices",
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