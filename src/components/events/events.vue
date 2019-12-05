<template>
    <div class="top " style="padding: 20px">

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="ratio: 7:3; animation: push;autoplay: false;autoplay-interval: 2000">

            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                <li>
                    <div>
                        <div class="uk-inline" >
                            <div uk-lightbox  class="uk-inline-clip uk-transition-toggle" tabindex="0" >
                                <a class="uk-button uk-button-default" href="https://cdn.pixabay.com/photo/2019/10/15/13/40/winter-4551699__340.jpg" data-caption="Caption"><img
                                        class="uk-transition-scale-up uk-transition-opaque"  src="https://cdn.pixabay.com/photo/2019/10/15/13/40/winter-4551699__340.jpg" alt=""></a>
                            <div class="uk-position-bottom uk-card-body" uk-dark ><p class="uk-text-bold">Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                            </div>

                        </div>
                    </div>
                </li>

            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

        </div>

    </div>
</template>

<script>
    export default {
        name: "events"
    }
</script>

<style scoped>
img{
    width: 450px;
    height: 300px;
}
    .top{
       margin-top: 100px;
       margin-bottom: 100px;
    }

    img{
        height: 600px;
    }
    .uk-inline{
        opacity: 0.7;
    }
    p{color: #db0f31}
</style>
