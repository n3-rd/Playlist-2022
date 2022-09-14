<template>
    <div>
        <div class="page">
            <div class="slider-container">
                <swiper
                :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :preloadImages="true"
    :scrollable="true"
    class="mySwiper"
  >
    <swiper-slide v-for="song in songs" :key="song.image">
    <div class="swiper-slide-container" :style="{backgroundImage:'url(' + song.image + ')'}"></div>
    </swiper-slide>
  </swiper>

            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import { onMounted } from 'vue';
    import {ref} from 'vue';
    import {gsap} from 'gsap';
    import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-cards';

  import { EffectCards } from "swiper";


  export default{
    data(){
        return{
          modules: [EffectCards],
            songs : [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      album: 'Album 1',
      image: 'https://fakeimg.pl/350x200/?text=Hello',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      album: 'Album 2',
      image: 'https://fakeimg.pl/350x200/?text=Hello',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      album: 'Album 3',
      image: 'https://fakeimg.pl/350x200/?text=Hello',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
      title: 'Song 4',
      artist: 'Artist 4',
      album: 'Album 4',
      image: 'https://fakeimg.pl/350x200/?text=Hello',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    },
    {
      title: 'Song 5',
      artist: 'Artist 5',
      album: 'Album 5',
      image: 'https://fakeimg.pl/350x200/?text=Hello',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
    },
    {
      title: 'Song 6',
      artist: 'Artist 6',
      album: 'Album 6',
      image: 'https://fakeimg.pl/350x200/?text=Hello',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
    },
    {
      title: 'Song 7',
      artist: 'Artist 7',
      album: 'Album 7',
      image: 'https://fakeimg.pl/350x200/?text=Hello',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
    },
    {
      title: 'Song 8',
      artist: 'Artist 8',
      album: 'Album 8',
      image: '',
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
    }
]
        }

    },
    components: {
        Swiper,
        SwiperSlide
    },

  }




</script>

<style lang="scss" scoped>
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background: rgb(229, 231, 235);
        .slider-container{
            // elegant card height and width
            height: 60vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            .mySwiper{
                width: 80%;
                height: 90%;
            }
            // background: rgb(229, 231, 235);
        }
    }

    .swiper-slide-container{
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    // Tablet
    @media screen
   and (min-width : 768px) {
   /* Styles here */
    .page {
     .slider-container{
          height: 60vh;
          width: 30rem;
     }
    }
}

// Laptop
@media screen
   and (min-width : 1200px) {
   /* Styles here */
   .page {
     .slider-container{
          height: 66vh;
          width: 30rem;
          .mySwiper{
                width: 70%;
                height: 90%;
            }
     }
    }
}


    </style>