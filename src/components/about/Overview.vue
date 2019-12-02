<template>
<div class="top uk-section uk-section-muted">
  <div class="uk-container">
      <h2 class="uk-text-center ">Overview</h2>
      <h1 class="uk-text-center uk-text-bold " style="padding-bottom: 80px">ABOUT US</h1>

      <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
          <div>
              <div class="uk-card-body">
                  <h3 class="uk-card-title">Media Left</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
          </div>


          <div class="uk-card-media-left uk-cover-container uk-background-fixed">
              <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true;autoplay-interval: 4000">

                  <ul class="uk-slideshow-items" >
                      <li>
                          <img src="https://cdn.pixabay.com/photo/2017/01/29/15/15/containers-2018438__340.jpg" alt="" uk-cover>
                      </li>
                      <li>
                          <img src="https://cdn.pixabay.com/photo/2016/05/02/16/34/container-gantry-crane-1367601__340.jpg" alt="" uk-cover>
                      </li>
                      <li>
                          <img src="https://cdn.pixabay.com/photo/2015/12/17/02/37/shipping-containers-1096829__340.jpg" alt="" uk-cover>
                      </li>
                  </ul>

                  <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                  <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

              </div>
          </div>
      </div>


  </div>
</div>
</template>

<script>
    export default {
        name: "Overview"
    }
</script>

<style scoped>
.top{
    margin-top:100px;
}
    img{
        border-radius: 15px 50px;
    }
    img{
        border: 3px solid white;
    }
    h2{
        color:#db0f31;
    }
</style>
