<template>
   <div class="hello" >
       <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
           <div class="  uk-card-media-left uk-cover-container" style="background-color: rgba(1, 1, 1, 1); ">
               <img class="uk-background-fixed " src="https://cdn.pixabay.com/photo/2018/01/14/15/53/hamburg-3082070__340.jpg" alt="" uk-cover>
               <canvas width="600" height="400"></canvas>
           </div>
           <div>
               <div class="uk-card-body" >
                   <h3 class="uk-card-title">Media Left</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "serve"
    }
</script>

<style scoped>
    .hello{
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .uk-card-body{
        background: #202020 !important;
        height: 400px;
    }
    p,h3{
        color: white;
    }
</style>
