<template>
    <div>
<Myhead/>
      <p id="home">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
<Myfoot/>
    </div>
</template>

<script>
import Myhead from '@/components/shared/header.vue'
import Myfoot from '@/components/shared/footer.vue'

export default {
    name: 'about',
  components: {
    Myhead,
    Myfoot
  },
  methods: {
    changeTheme(){
      // if(them=="dark"){
      //  let link=document.createElement('link');
      //  link.href = "address dark";
      //  link.id = "darkCss";
      //  if (!document.getElementById("darkcss")) {
      //    document.head.appendChild(link);
      //  }
      //  else{
      //    let link = document.createElement("link");
      //    link.href = "address main";
      //    link.id = "darkCss";
      //    if (!document.getElementById("darkCss")) {
      //      document.head.appendChild(link);
      //    }
      //  }
      // }
      document.body.classList.toggle('darkMode')
      },
      changeMatn(){
        document.body.classList.toggle('ltrTheme')
      }
  },
}

</script>
<style>
    
#home{
  line-height: 25px;
  width: 90%;
  height: 100px;  
  margin: 20px auto;
}

</style>