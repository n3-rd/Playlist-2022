<template>
    <div>

        <div class="page h-screen w-screen overflow-hidden">
          <div @click="stopSound" class="outline-text absolute bottom-0 h-16 w-24 cursor-pointer font-black stroke-black stroke-1 text-white ">Stop Music</div>
          <a href="https://github.com/n3-rd" target="_blank"><div class="outline-text absolute bottom-0 right-0 h-16 w-44 cursor-pointer font-black stroke-black stroke-1 text-white">Made by N3RD</div></a>
          <div class="outline-text absolute bottom-0 left-0 h-16 pl-3 w-52 font-black stroke-black stroke-1 text-white ">Swipe to chage slides</div>
          <!--  -->
            <div class="slider-container" v-if="this.songs!=null">
                <swiper
                :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :preloadImages="true"
    :scrollable="true"
    :mousewheel="true"
    :scrollbar="true"
    @slideChange="changePageColor"
    class="mySwiper"
    ref="mySwiper"
  >
    <swiper-slide v-for="song in songs" :key="song.track.id">
      <div class="swiper-slide-container" v-if="song.track.album.images">
        <div class="swiper-slide__inner bg-black">

          <div class="image-container w-full flex justify-center items-center py-6 bg-black">
            <div class="image w-44 h-44 rounded-full bg-center bg-cover" :style="{ backgroundImage: `url(${song.track.album.images[0].url})`}"></div>
          </div>

          <div class="track-title px-3 text-lg font-black">
            {{song.track.name}}
          </div>
          <div class="track-artists px-3 py-3 opacity-90 text-sm">
          <!-- get all artists -->
          <span class="artist" v-for="artist in song.track.artists" :key="artist.id">
            {{artist.name + ' '}}
            <span v-if="song.track.artists[song.track.artists.length-1].id != artist.id">, </span>
            </span>
          </div>

          <div v-if="song.track.preview_url" class="track-play py-7 cursor-pointer" @click="playMusic(song.track.preview_url)">
            <div class="play-button">
              <svg width="47" height="47" viewBox="0 0 24 24"><path fill="#ffffff" d="m9.5 16.5l7-4.5l-7-4.5ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            </div>
          </div>


        </div>
    <!-- {{song.track.album.images[0]}} -->
    </div>
    </swiper-slide>
  </swiper>

            </div>

        </div>

    </div>
</template>

<script>
    import {gsap} from 'gsap';
    import {ref} from 'vue';
    import ColorThief from 'colorthief'
    import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-cards';

  import { EffectCards } from "swiper";
  import {Howl, Howler} from 'howler';

  function manualSlides(){
    // listen for arrow keys
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight') {
        // go to next slide
        this.$refs.mySwiper.swiper.slideNext();
      }
      if (e.key === 'ArrowLeft') {
        // go to previous slide
        this.$refs.mySwiper.swiper.slidePrev();
      }
    });
  }

  export default{
    data(){
        return{
          modules: [EffectCards],
            songs : null,
            songPlaying: true,
        }

    },
    components: {
        Swiper,
        SwiperSlide
    },
    methods:{
      async fetchPlaylist(){
        const res = await fetch(`https://rich-cyan-sturgeon-sock.cyclic.app/getPlaylist?playlistId=3aqKMnIgBOR3HMROvJ172x?si=3f643d2c069f4256`);
        const data = await res.json();
        console.log(data.tracks.items);
        this.songs = data.tracks.items.sort(() => Math.random() - 0.5);
        setTimeout(() => {
          this.getCurrentSlideColor()
        }, 100);
      },
      getCurrentSlideColor(){
        var currentSlide = document.querySelector('.swiper-slide-active .image');
        var currentSlideBackground = currentSlide.style.backgroundImage;
var currentSlideBackgroundUrl = currentSlideBackground.replace('url(','').replace(')','').replace(/\"/gi, "");

// get dominant color of image
var colorThief = new ColorThief();
var image = new Image();
image.crossOrigin = "Anonymous";
image.src = currentSlideBackgroundUrl;
image.onload = function() {
  var color = colorThief.getColor(image);
  console.log(color);
  document.querySelector('.page').style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};
      },
      changePageColor(){
        setTimeout(() => {
          var currentSlide = document.querySelector('.swiper-slide-active .image');

var currentSlideBackground = currentSlide.style.backgroundImage;
var currentSlideBackgroundUrl = currentSlideBackground.replace('url(','').replace(')','').replace(/\"/gi, "");

// get dominant color of image
var colorThief = new ColorThief();
var image = new Image();
image.crossOrigin = "Anonymous";
image.src = currentSlideBackgroundUrl;
image.onload = function() {
  var color = colorThief.getColor(image);
  console.log(color);
  document.querySelector('.page').style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};
        }, 100);


      },
      playMusic(sound){
        Howler.stop();
        var sound = new Howl({
  src: [sound],
  html5: true
});

sound.play();
      },
      stopSound(){
        Howler.stop();
      },
    },
    mounted(){
      this.fetchPlaylist();
      manualSlides();
    }

  }




</script>

<style lang="scss" scoped>
    .page {
      .outline-text{
        -webkit-text-stroke: 1px #000;
      }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background: rgb(229, 231, 235);
        transition: all 0.5s ease;
        .slider-container{
            // elegant card height and width
            height: 60vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
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
        border-radius: 2px;

    }
    .swiper-slide__inner{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        // background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-align: center;
        padding: 0 1rem;
        // .image-container{
        //   height: 70%;
        //   width: 100%;
        //   background-size: cover;
        //   background-position: center;
        //   background-repeat: no-repeat;
        // }
        // .details{
        //   // background: #fff;
        //   height: 30%;
        //   width: 100%;
        //   color: #000;
        // }
    }

    // Tablet
    @media screen
   and (min-width : 768px) {
   /* Styles here */
    .page {
     .slider-container{
          height: 76vh;
          width: 28rem;
     }
    }
}

// Laptop
@media screen
   and (min-width : 1200px) {
   /* Styles here */
   .page {
     .slider-container{
          height: 76vh;
          width: 30rem;
          .mySwiper{
                width: 70%;
                height: 90%;
            }
     }
    }

}


    </style>