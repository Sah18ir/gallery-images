<template>
<div>
<Myhead/>

<div id="app">
  <v-app id="inspire">
      <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-app>
</div>
<div class="titles">
<h2 class="newTitle">برترین تصاویر</h2>
<h6 class="guideTitle">لطفاً بر روی تصاویر زیر کلیک کنید</h6>
</div>
        <br />
        <br />
     
     <div id="gallery">
        <img
          @click="showImages(indexs)"
          v-for="(imageAddresstwo, indexs) in imageList"
          :key="indexs"
          :src="imageAddresstwo"
          id="imageAll"
          alt=""
        />
      </div>
      <div v-if="showImageModal" id="imageModal">
      <button id="closeModal" @click="showImageModal = false">بستن</button>
      <svg @click="moveImage('p')" id="butp" data-v-41be6633="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="chevron double left" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-double-left mx-auto b-icon bi"><g data-v-41be6633=""><path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path></g></svg>
      <img :src="selectedImage" id="imageAllNext" alt="" />
      <svg @click="moveImage('n')" id="butn" data-v-41be6633="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="chevron double right" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-double-right mx-auto b-icon bi"><g data-v-41be6633=""><path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path><path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path></g></svg>    
      </div>
<Myfoot/>
</div>
</template>

<script>
// @ is an alias to /src
import Myhead from '@/components/shared/header.vue'
import Myfoot from '@/components/shared/footer.vue'

export default {
  name: 'Home',
  components: {
    Myhead,
    Myfoot
  },
  data(){
    return{
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      showImageModal: false,
      selectedImage: null,
      selectedIndex: 0,
      imageList: [
        'https://picsum.photos/id/786/367/267',
        'https://picsum.photos/id/1035/367/267',
        'https://picsum.photos/id/1027/367/267',
        'https://picsum.photos/id/782/367/267',
        'https://picsum.photos/id/1042/367/267',
        'https://picsum.photos/id/628/367/267',
        'https://picsum.photos/id/164/367/267',
        'https://picsum.photos/id/1044/367/267',
      ],
      
      imageLists: [
        
      ],
    }
  },
  methods: {
    moveImage(flag) {
      if (flag == 'p') {
        if (this.selectedIndex == 0) {
          this.selectedIndex = this.imageList.length - 1
        } else {
          this.selectedIndex--
        }
      } else {
        if (this.selectedIndex == this.imageList.length - 1) {
          this.selectedIndex = 0
        } else {
          this.selectedIndex++
        }
      }
      this.selectedImage = this.imageList[this.selectedIndex]
    },
    showImage(index) {
      this.selectedIndex = index
      this.selectedImage = this.imageList[index]
      this.showImageModal = true
    },
     showImages(indexs) {
      this.selectedIndex = indexs
      this.selectedImage = this.imageList[indexs]
      this.showImageModal = true
    },
  },
}

</script>
<style>

*{
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #EFEFEF;
}

#closeModal {
  position: fixed;
  z-index: 13;
  background-color: red;
  padding: 12px;
  font-family: cursive;
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  right: 0;
}

#butp {
  font-size: 30px;
  text-align: center;
  display: flex;
  margin-top: 290px;
}

#butn {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 290px;
}

#imageAllNext {
  margin: 85px -300px auto;
  width: 45%;
}

#imageModal {
  display: flex;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: white; 
  padding-left: 50px;
}

#gallery {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
}

#imageAll {
  display: flex;
  width: 360px;
  height: 440px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.newTitle{
  text-align: center;
  margin-left: 500px;
}

.guideTitle{
  margin-top: 12px;
  color: red;
}

.titles{
  width: 99%;
  display: flex;
  justify-content: space-between;
}

</style>