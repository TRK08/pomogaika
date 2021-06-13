<template>
  <section class="about-component">
    <div class="container">
      <h2
        class="about-component-title col-12"
        :class="{ 'about-component--yellow-text': routePath !== '/' }"
      >
        О нас
      </h2>
      <div class="about-component-text row col-12" v-if="routePath === '/'">
        <div
          class="col-sm-6 col-6"
          v-for="(text, index) in aboutShop.mainText"
          :key="index"
        >
          <p v-html="text.parag"></p>
        </div>
      </div>
      <div class="about-component-text row col-12" v-else>
        <div
          class="col-sm-6 col-6"
          v-for="(text, index) in aboutService.mainText"
          :key="index"
        >
          <p v-html="text.parag"></p>
        </div>
      </div>
      <div class="about-component-map row col-12">
        <div class="col-sm-4" v-if="routePath === '/'">
          <div
            class="about-component-map-left"
            v-for="item in aboutShop.items"
            :key="item.title"
          >
            <span class="about-component-num about-component--yellow-text">
              {{ item.num }}
            </span>
            <div>
              <h3 class="about-component--yellow-text">
                {{ item.title }}
              </h3>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4" v-else>
          <div
            class="about-component-map-left"
            v-for="item in aboutService.items"
            :key="item.title"
          >
            <span class="about-component-num">
              {{ item.num }}
            </span>
            <div>
              <h3 class="">
                {{ item.title }}
              </h3>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div class="map__wrap col-sm-8"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      routePath: this.$route.path,
      aboutShop: {
        mainText: [
          {
            parag:
              "Интернет-магазин автозапчастей “Помогайка” - компания, занимающаяся розничной продажей запчастей, расходных материалов, аксессуаров и комплектующих для автомобилей иностранного производства. <br /> В нашем ассортименте продукция ведущих европейских, корейских, японских марок, а так же большой выбор неоригинальных автомобильных запчастей.",
          },
          {
            parag:
              "Мы предлагаем быстрый и удобный сервис по поиску, подбору и заказу необходимых запчастей для вашего автомобиля, накопительную систему скидок, отличный сервис и максимально короткие сроки доставки.",
          },
        ],
        items: [
          {
            num: 15,
            title: "Поставщиков",
            text: "Проверенные временем поставщики, которые не подводят.",
          },
          {
            num: 9000,
            title: "Запчастей",
            text: "Ассортимент, который мы постоянно пополняем.",
          },
          {
            num: 200,
            title: "Отзывов",
            text: "И тысячи довольных клиентов, которые выбирают нас.",
          },
        ],
      },
      aboutService: {
        mainText: [
          {
            parag:
              "Команда сервисного центра «Помогайка» занимается обслуживанием автомобилей японского, корейского, европейского производства и предлагает клиентам широкий спектр услуг: от проведения компьютерной диагностики на профессиональном диагностическом оборудовании до капитального ремонта ДВС, тормозной системы, МКПП.",
          },
          {
            parag:
              "Для выполнения работ сотрудники используют современное оборудование, новейшие инструменты, качественные расходные материалы. <br> Перед началом каких-либо процедур вам проведут компьютерную диагностику, чтобы выявить существующие проблемы, предложат способы их устранения. Богатый опыт мастеров позволяет браться за решение даже самых сложных случаев.",
          },
        ],
        items: [
          {
            num: 76,
            title: "Автомобилей",
            text: "Обслужили в прошлом месяце",
          },
          {
            num: 341,
            title: "Отзыв",
            text: "От счастливых клиентов за прошлый год",
          },
          {
            num: 4,
            title: "Года",
            text: "Мы работаем для вас",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>