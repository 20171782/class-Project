<template>
    <div class="top">

        <h1 class="uk-text-bold" style="padding-bottom: 30px">OUR CLIENTS</h1>
        <div style="margin: 30px" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="ratio: 7:3; animation: push;autoplay: true;autoplay-interval: 2000">

            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                <li>
                    <div class="uk-panel">
                        <img src="data:image/png;base64,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" alt="">
                        <div class="uk-position-center uk-panel"><h1>1</h1></div>
                    </div>
                </li>
                <li>
                    <div class="uk-panel">
                        <img src="data:image/png;base64,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" alt="">
                        <div class="uk-position-center uk-panel"><h1>1</h1></div>
                    </div>
                </li>
                <li>
                    <div class="uk-panel">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOqdZRqHIsu9AWND3H-EL12YuJTMK2-9_hOZxp53QGY6sIh7JZQ&s" alt="">
                        <div class="uk-position-center uk-panel"><h1>1</h1></div>
                    </div>
                </li>
                <li>
                    <div class="uk-panel">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbldJpnsaOIq4R7YhseB_Fxf5AZf4kYwC9nZlbApoKOkAnzNYuA&s" alt="">
                        <div class="uk-position-center uk-panel"><h1>1</h1></div>
                    </div>
                </li>
                <li>
                    <div class="uk-panel">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEbEiz_0j0PwHjk8OMB_AweX7Ai9XqoAl7rK5hXmGCJRO8zgG&s" alt="">
                        <div class="uk-position-center uk-panel"><h1>1</h1></div>
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
        name: "Clients"
    }
</script>

<style scoped>

    img{
        width: 100px;
        height: 100px;
    }
    .top{margin-bottom: 100px}
</style>
