<template>
<div class="top uk-container uk-container-small">
    <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="uk-card-media-left uk-cover-container">
            <img src="https://cdn.pixabay.com/photo/2019/11/19/22/25/giraffe-4638681__340.jpg" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
        </div>
        <div>
            <div class="uk-card-body">
                <h3 class="uk-card-title uk-text-bold">Mission Statement</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

    <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
            <img src="https://cdn.pixabay.com/photo/2019/11/19/22/25/giraffe-4638681__340.jpg" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
        </div>
        <div>
            <div class="uk-card-body">
                <h3 class="uk-card-title uk-text-bold">Vision Statement</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "standards"
    }
</script>

<style scoped>
.top{
    margin-top: 100px;
    margin-bottom: 100px;

}
    .uk-card-title{
        color: #db0f31;;
    }
</style>
