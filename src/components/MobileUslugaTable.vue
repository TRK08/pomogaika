<template>
  <section class="mobile-table-component">
    <div class="container">
      <h2 class="usluga-table-title">Цены на ремонт двигателя и его деталей</h2>
      <p class="usluga-table-subtitle">
        Цена зависит от марки и модификации автомобиля. Узнайте точную цену у
        специалистов по телефону или через контактную форму.
      </p>
      <div class="mobile-table-tab__wrap row">
        <div
          v-for="(tab, index) in serviceTable.header.slice(
            1,
            serviceTable.header.length
          )"
          :key="tab.c.name"
          :v-model="tab.isActive"
          @click="activateTab(index)"
          class="mobile-table-tab col-xs-4"
        >
          <div
            class="mobile-table-tab-btn"
            :class="{ 'mobile-table-tab-btn--active': tab.isActive }"
          >
            {{ tab.c }}
          </div>
        </div>
      </div>
      <div class="usluga-table-head">
        <span>Наименование услуги</span>
        <span>Стоимость</span>
      </div>
      <div class="mobile-table__wrap">
        <table class="mobile-table">
          <tr
            v-for="tabInfo in serviceTable.body.filter(
              (item) => item[1].c !== '==='
            )"
            :key="tabInfo.c"
          >
            <td>
              {{ tabInfo[0].c }}
            </td>
            <td>
              {{ tabInfo[id].c }}
            </td>
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
    </div>
  </section>
</template>

<script>
export default {
  name: "MobileUslugaTable",
  props: {
    serviceTable: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      id: 1,
    };
  },
  methods: {
    activateTab(index) {
      this.id = index + 1;
      this.$emit("activate", index);
    },
  },
};
</script>

<style scoped>
.mobile-table-tab-btn--active {
  background-color: #bf830d !important;
  transition: all 0.3s ease-in;
}
</style>