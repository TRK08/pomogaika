<template>
  <section class="usluga-info">
    <div class="usluga-info__wrap">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 usluga-info-left">
            <h2 class="usluga-info-title">Ремонт двигателя</h2>
            <h3 class="usluga-info-subtitle">Когда нужен ремонт двигателя?</h3>
            <div class="usluga-info-descr">
              <p>
                Мотор, которому нужна «капиталка», сообщает об этом следующим
                образом:
              </p>
              <ul>
                <li>- Белый дым от мотора и из выхлопной трубы;</li>
                <li>- Расход топлива сверх меры;</li>
                <li>
                  - Плохая работа ДВС при движении: его подергивание, стуки и
                  перегрев;
                </li>
                <li>- Перерасход масла</li>
                <li>- Образование нагара на свечах зажигания;</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 usluga-info-right">
            <img src="../assets/img/remont-dvigatelya-big.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UslugaInfo",
};
</script>

<style scoped>
.usluga-info {
  margin-top: 30px;
  margin-bottom: 70px;
}

.usluga-info-title,
.usluga-info-subtitle {
  margin-bottom: 30px;
}

.usluga-info-subtitle {
  font-size: 20px;
  line-height: 21px;
}

.usluga-info-descr {
  font-size: 15px;
  line-height: 16px;
}

.usluga-info-descr p {
  margin-bottom: 15px;
}

.usluga-info-descr ul li {
  font-weight: 400;
  list-style-position: inside;
}

.usluga-info-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.usluga-info-right img {
  width: 100%;
}
</style>