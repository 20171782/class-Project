<template>
   <div>
       <navi></navi>
       <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://cdn.pixabay.com/photo/2019/09/30/18/10/budapest-4516471__340.jpg" uk-img>
           <h1>CONTACT US</h1>
       </div>
       <div class="margin">
           <div class="uk-container uk-container-small">
               <div class=" uk-child-width-1-2@s " uk-grid>
                   <div class="test uk-text-justify">
                       <div>
                           <h3>Headquarters</h3>
                           <p>80-82 Second Street Port Bustamante Kingston 13</p>
                           <p>Kingston, Jamaica</p>
                           <p>Phone: (876) 632-5566</p>
                           <p>Email: customer@adlogistics.com</p>
                       </div>

                   </div>
                   <div>
                       <div class="uk-card-body">
                           <form>
                               <fieldset class="uk-fieldset">

                                   <legend class="uk-legend">Contact form</legend>

                                   <div class="uk-margin">
                                       <input class="uk-input" type="text" placeholder="Input">
                                   </div>
                                   <div class="uk-margin">
                                       <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
                                   </div>
                               </fieldset>
                           </form>
                           <button class="uk-button uk-align-left" style="background-color: green;color: white">Primary</button>
                       </div>
                   </div>
               </div>
           </div>

           <div style="background:#FF2500 ">
               <h1 class="uk-text-bold" style="padding-top: 20px;color: white">Find Us</h1>
              <div style="padding: 50px">
                  <iframe width="950" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
           </div>

       </div>
       </div>


</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
    .uk-height-large {
        border-bottom-left-radius: 150px 50px;
        border-bottom-right-radius: 150px 50px;
    }
    .margin {
        margin-top: 100px;
        margin-bottom: 100px;
    }
    li{
        list-style: none;
    }
    .test{
        margin-top: 50px;
    }
    p{
        color: green;
    }


</style>
