<template>
  <div id="homeGallery">
    <Myhead />

    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in itemsSlider"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <br />
    <br />
    <br />
    <h2 class="Title">تصاویر فوق العاده</h2>
    <br />
    <div id="Pgallery">
      <b-container fluid class="p-4 bg-white" id="cont">
        <b-row>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://picsum.photos/250/250/?image=57"
              alt="Image 3"
              class="imgBall"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://picsum.photos/250/250/?image=700"
              alt="Image 3"
              class="imgBall"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://picsum.photos/250/250/?image=400"
              alt="Image 3"
              class="imgBall"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <br />
    <br />
    <h2 class="Title">جدیدترین کار ها</h2>
    <br />
    <br />
    <div id="app">
      <v-app id="inspire">
        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-app>
    </div>
    <br />
    <br />

    <Myfoot />
  </div>
</template>

<script>
import Myhead from '@/components/shared/header.vue'
import Myfoot from '@/components/shared/footer.vue'

export default {
  name: 'works',
  components: {
    Myhead,
    Myfoot,
  },
  data() {
    return {
      itemsSlider: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
      ],
    }
  },
}
</script>
<style scoped>
#Pgallery {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
}

.sliders {
  width: 100%;
}

#cont {
  width: 94%;
  background: white;
}

.imgBall {
  border: 0;
  width: 100%;
}

.Title{
  text-align: center;
}
</style>
