<template>
  <section class="usluga-table-component">
    <div class="container">
      <h2 class="usluga-table-title">Цены на ремонт двигателя и его деталей</h2>
      <p class="usluga-table-subtitle">
        Цена зависит от марки и модификации автомобиля. Узнайте точную цену у
        специалистов по телефону или через контактную форму.
      </p>
      <table class="usluga-table">
        <tr>
          <td v-for="model in serviceTable.header">{{ model.c }}</td>
        </tr>
        <tr v-for="price in serviceTable.body">
          <td v-for="item in price">{{ item.c }}</td>
        </tr>
      </table>
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
</style>