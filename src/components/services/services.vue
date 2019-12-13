<template>
    <div >
        <navi></navi>
        <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" uk-img>
            <h1>Our Services</h1>
        </div>
       <div class="hello">
           <intro></intro>
           <serve></serve>
           <mains></mains>
       </div>
    </div>
</template>

<script>

    export default {
        name: "newAndEvents",
        components:{

        }
    }
</script>

<style scoped>
    .uk-height-large {
        border-bottom-left-radius: 150px 50px;
        border-bottom-right-radius: 150px 50px;
    }
    .hello{
        margin-top: 100px;
        margin-bottom: 100px;
    }
</style>
