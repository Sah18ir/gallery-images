<template>
  <div>
    <header id="head">
      <button>
        <router-link alt to="/" class="days">صفحه اصلی</router-link>
      </button>
      <button>
        <router-link alt to="/about" class="days">بیوگرافی من</router-link>
      </button>
      <button @click="changeTheme()" class="days">شب و روز</button>
      <button @click="changeMatn()" class="days">راست و چپ چین</button>
      <button>
        <router-link alt to="/works" class="days">نمونه کار ها</router-link>
      </button>
      <b-button v-b-modal.modal-multi-1 class="days paints">نقاشی ها</b-button>
      <b-modal
        id="modal-multi-1"
        size="lg"
        title="لطفاً برای دیدن تصاویر بعدی روی نقاشی کلیک کنید"
        ok-only
        no-stacking
      >
        <b-button v-b-modal.modal-multi-2>
          <img src="@/assets/img/1.jpg" alt="" style="width: 100%;" />
        </b-button>
      </b-modal>
      <b-modal id="modal-multi-2" title="مسیح" ok-only>
        <b-button v-b-modal.modal-multi-3 size="sm">
          <img src="@/assets/img/2.jpg" alt="" style="width: 100%;" />
        </b-button>
      </b-modal>
      <b-modal id="modal-multi-3" size="sm" title="جنگل وحشی" ok-only>
        <p class="my-1">
          <img src="@/assets/img/4.jpg" alt="" style="width: 100%;" />
        </p>
      </b-modal>
      <div class="special">
        <b-button v-b-toggle.sidebar-1>ویژه</b-button>
        <b-sidebar id="sidebar-1" title="بهترین ها برای شما است" shadow>
          <div class="px-3 py-2">
            <p>
              انواع نقاشی ها در گالری من موجود است
              می توانید از آنها دیدن کنید و لذت ببرید
              در صورت علاقه به خرید با من تماس بگیرید
            </p>
            <p>
              .دنیا دنیای رنگ ها و شگفتی ها است
            </p>              
            <br>
            <b-img
              src="https://picsum.photos/500/500/?image=54"
              fluid
              thumbnail
            ></b-img>
          </div>
        </b-sidebar>
      </div>
      <img src="@/assets/img/Logo.png" class="Logo" alt="logo">
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      document.body.classList.toggle('darkMode')
    },
    changeMatn() {
      document.body.classList.toggle('ltrTheme')
    },
  },
}
</script>

<style>
#modal-multi-1 {
  color: red;
  font-weight: bolder;
  font-size: larger;
}

header {
  width: 90%;
  height: 50px;
  margin: 10px auto;
}

.days {
  background-color: purple;
  border: 0;
  margin-left: 2px;
  color: white;
  padding: 10px;
  font-family: cursive;
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.days:hover {
  color: white;
  background: darkmagenta;
}

.special{
  font-family: cursive;
  display: inline-block;
  margin-left: 2.5px;
  text-align: center;
}

.Logo{
  width: 8%;
  float: right;
}
</style>
