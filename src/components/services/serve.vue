<template>
   <div class="hello" >
       <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
           <div class="  uk-card-media-left uk-cover-container" style="background-color: rgba(1, 1, 1, 1); ">
               <img class="uk-background-fixed " src="https://cdn.pixabay.com/photo/2018/01/14/15/53/hamburg-3082070__340.jpg" alt="" uk-cover>
               <canvas width="600" height="400"></canvas>
           </div>
           <div>
               <div class="uk-card-body " >
                   <h3 class="uk-card-title">Services</h3>
                   <p class="uk-text-justify"><span>Dry Cargo</span> - For your dry cargo shipping needs, AD Logistics is well equipped with a
                       vast fleet of secure containers. With knowledgeable and caring employees, a wide variety
                       of containers and fixed-day sailing schedules, we are always ready to handle any type of
                       cargo. From building materials and hardware to steel-fabricated metals, plastic products,
                       rubber goods, coffee, spare parts, and non-printed materials, whatever your import or
                       export cargo needs are, look no further. AD Logistics is always the carrier of choice. AD
                       Logistics offers 20 foot, 40 foot, and 45 foot containers for your dry goods shipping
                       needs.</p>
                   <p class="uk-text-justify">
                       <span>Project Cargo </span>- AD Logistics has the experience and capabilities to handle all of your
                       oversized construction and agriculture machinery, power plants and heavy equipment of
                       all kinds.With an advanced, specialized equipment fleet that includes: lowboys, roll
                       trailers and single and double drop deck flatbeds, we provide the flexibility and
                       knowledge required to carry this special cargo.Our fleet of nearly 2,000 (20ft. and 40ft.)
                       flat racks, excellent handling equipment, and ample staging area is ideal for safe and
                       efficient handling of heavy lift and oversized cargo.In addition to the use of gantry cranes
                       at various United States terminals,
                   </p>

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
    p{
        color: white;
    }
    h3{
        color: #FF2500;
    }
    span{color: green}
</style>
