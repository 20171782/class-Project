<template>
    <div class="hello">
        <navi></navi>
        <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://cdn.pixabay.com/photo/2019/09/30/18/10/budapest-4516471__340.jpg" uk-img>
            <h1>BUSINESS TERMS</h1>
        </div>



      <div class="uk-section uk-section-muted">
          <p uk-margin>
              <a class="uk-button uk-button-default" href="#first">LEGAL TERMS <span uk-icon="arrow-down"></span></a>
              <a class="uk-button uk-button-default" href="#second">GLOBAL SECURITY <span uk-icon="arrow-down"></span></a>
              <a class="uk-button uk-button-default" href="#third">CODES OF CONDUCT <span uk-icon="arrow-down"></span> </a>

          </p>

          <div class="top uk-container uk-container-small " id="first">
              <h1>LEGAL TERMS</h1>
              <div class=" uk-child-width-1-2@s uk-grid-match  " uk-grid>
                  <div>
                      <div class="uk-card  uk-card-body">
                          <h3 class="uk-card-title">Hover</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card   uk-card-body">
                          <h3 class="uk-card-title">Default</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>

              </div>

          </div>




          <div class="top uk-container uk-container-small " id="second">
              <h1>GLOBAL SECURITY</h1>
              <div class="uk-child-width-1-2@s uk-grid-match  " uk-grid>
                  <div>
                      <div class="uk-card  uk-card-body">
                          <h3 class="uk-card-title">Hover</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card   uk-card-body">
                          <h3 class="uk-card-title">Default</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>

              </div>

          </div>



          <div class="top uk-container uk-container-small" id="third">
              <h1>CODES OF CONDUCT</h1>
              <div class="uk-child-width-1-2@s uk-grid-match  " uk-grid>
                  <div>
                      <div class="uk-card  uk-card-body">
                          <h3 class="uk-card-title">Hover</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card   uk-card-body">
                          <h3 class="uk-card-title">Default</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>

              </div>

          </div>

      </div>

    </div>
</template>

<script>
    import events from '@/components/events/events.vue'
    export default {
        name: "newAndEvents",
        components:{
            events
        }
    }
</script>

<style scoped>
    .uk-height-large {
        border-bottom-left-radius: 150px 50px;
        border-bottom-right-radius: 150px 50px;
    }
    .top{
        margin-top: 100px;
    }
    a{
        margin: 15px;
    }
</style>
