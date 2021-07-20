<template>
  <section class="usluga-table-component">
    <div class="container">
      <h2 class="usluga-table-title">Цены на ремонт двигателя и его деталей</h2>
      <p class="usluga-table-subtitle">
        Цена зависит от марки и модификации автомобиля. Узнайте точную цену у
        специалистов по телефону или через контактную форму.
      </p>
      <div class="usluga-table-head">
        <span>Наименование услуги</span>
        <span>Стоимость</span>
      </div>
      <table class="usluga-table">
        <tr>
          <td v-for="(model, index) in serviceTable.header" :key="index">
            {{ model.c }}
          </td>
        </tr>
        <tr
          v-for="(prices, index) in serviceTable.body.filter(
            (item) => item[1].c != '==='
          )"
          :key="index"
        >
          <td v-for="(item, index) in prices" :key="index">{{ item.c }}</td>
        </tr>
      </table>
      <div class="table-descr">
        <div
          class="table-descr-item"
          v-for="(item, index) in serviceTable.body.filter(
            (item) => item[1].c === '==='
          )"
          :key="index"
        >
          <div>{{ item[0].c }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UslugaTable",
  props: {
    serviceTable: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.none-border {
  color: red;
}
</style>