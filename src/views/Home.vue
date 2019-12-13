<template>
 <div>
   <navi></navi>
<!--    <div style="background-color: rgba(0,0,0,0.9)">-->
<!--        <div class="  uk-position-relative uk-visible-toggle" tabindex="-1" uk-slideshow="min-height: 300; max-height: 900;animation: push">-->

<!--            <ul class="uk-slideshow-items top " >-->
<!--                <li>-->
<!--                    <img src="https://cdn.pixabay.com/photo/2018/06/24/03/06/ship-3493887__340.jpg" alt="" uk-cover>-->
<!--                    <div class="uk-overlay-primary uk-position-cover"></div>-->
<!--                    <div class="uk-position-center uk-position-small uk-text-center uk-overlay uk-position-bottom uk-light">-->
<!--                        <h2 class="uk-margin-remove uk-text-center">The Most Reliable way of shipping</h2>-->
<!--                        <p class="uk-margin-remove uk-text-center uk-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit </p>-->
<!--                    </div>-->
<!--                </li>-->

<!--                <li>-->
<!--                    <img src="https://cdn.pixabay.com/photo/2018/06/24/03/06/ship-3493887__340.jpg" alt="" uk-cover>-->
<!--                    <div class="uk-overlay-primary uk-position-cover"></div>-->
<!--                    <div class="uk-position-center uk-position-small uk-text-center uk-overlay uk-position-bottom uk-light">-->
<!--                        <h2 class="uk-margin-remove uk-text-center">The Most Reliable way of shipping</h2>-->
<!--                        <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->
<!--                    </div>-->
<!--                </li>-->

<!--                <li>-->
<!--                    <img src="https://cdn.pixabay.com/photo/2018/06/24/03/06/ship-3493887__340.jpg" alt="" uk-cover>-->
<!--                    <div class="uk-overlay-primary uk-position-cover"></div>-->
<!--                    <div class="uk-position-center uk-position-small uk-text-center uk-overlay uk-position-bottom uk-light">-->
<!--                        <h2 class="uk-margin-remove uk-text-center">The Most Reliable way of shipping</h2>-->
<!--                        <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->
<!--                    </div>-->
<!--                </li>-->

<!--                <li>-->
<!--                    <img src="https://cdn.pixabay.com/photo/2018/06/24/03/06/ship-3493887__340.jpg" alt="" uk-cover>-->
<!--                    <div class="uk-overlay-primary uk-position-cover"></div>-->
<!--                    <div class="uk-position-center uk-position-small uk-text-center uk-overlay uk-position-bottom uk-light">-->
<!--                        <h2 class="uk-margin-remove uk-text-center">The Most Reliable way of shipping</h2>-->
<!--                        <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->
<!--                    </div>-->
<!--                </li>-->

<!--                <li>-->
<!--                    <img src="https://cdn.pixabay.com/photo/2018/06/24/03/06/ship-3493887__340.jpg" alt="" uk-cover>-->
<!--                    <div class="uk-overlay-primary uk-position-cover"></div>-->
<!--                    <div class="uk-position-center uk-position-small uk-text-center uk-overlay uk-position-bottom uk-light">-->
<!--                        <h2 class="uk-margin-remove uk-text-center">The Most Reliable way of shipping</h2>-->
<!--                        <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->
<!--                    </div>-->
<!--                </li>-->

<!--            </ul>-->

<!--            <div class="uk-light">-->
<!--                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>-->
<!--                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>-->
<!--            </div>-->

<!--        </div>-->
<!--    </div>-->



     <div class="video" uk-slideshow style="background-color: rgba(1, 1, 1, 1); ">
         <ul class="uk-slideshow-items">

             <li class="uk-overlay uk-overlay-primary uk-position-bottom">
                 <iframe width="980" height="551" src="https://www.youtube.com/embed/r7Vmis_SE20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" uk-cover></iframe>
             </li>
         </ul>
     </div>
     <tran id="top"></tran>
     <a href="#end" uk-scroll><span uk-icon="icon:chevron-down; ratio: 3.5" style="color: #FF2500"></span></a>
     <overview></overview>
     <mains></mains>
     <Pro></Pro>
     <staff></staff>
     <events></events>
     <testimonies></testimonies>
     <contact></contact>
     <div id="end">
         <a href="#top" uk-scroll><span uk-icon="icon:chevron-up; ratio: 3.5" style="color: #FF2500"></span></a>
         <Clients></Clients>
     </div>
 </div>
</template>

<script>


import navi from '@/components/navi.vue'
import tran from '@/components/transportation.vue'



export default {
  name: 'home',
  components: {
   navi,tran,
  }
}
</script>

<style scoped>

  h2{
        font-size: 100px;
    }
    p{padding-top: 50px;
        font-size: 1.5em;
    }

    .uk-slideshow-items{
        opacity: 0.5;
    }

    span{font-weight: bold}
</style>
