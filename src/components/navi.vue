<template>
   <div class="top">


       <nav class="me uk-navbar-container" uk-navbar>

           <div class="uk-navbar-left">

               <ul class="uk-navbar-nav">

                   <li><a href="#"><router-link to="/"><img src="http://adl-asia.com/wp-content/uploads/2018/03/adl-logo-01.png" alt=""></router-link></a></li>
<!--                   <li><a href="#">Item</a></li>-->
               </ul>

           </div>

<!--           <div class="uk-navbar-right">-->

<!--               <ul class="uk-navbar-nav">-->
<!--                   <li class="uk-active"><a href="#">Active</a></li>-->
<!--                   <li>-->
<!--                       <a href="#">Parent</a>-->
<!--                       <div class="uk-navbar-dropdown">-->
<!--                           <ul class="uk-nav uk-navbar-dropdown-nav">-->
<!--                               <li class="uk-active"><a href="#">Active</a></li>-->
<!--                               <li><a href="#">Item</a></li>-->
<!--                               <li><a href="#">Item</a></li>-->
<!--                           </ul>-->
<!--                       </div>-->
<!--                   </li>-->
<!--                   <li><a href="#">Item</a></li>-->
<!--               </ul>-->

<!--           </div>-->

       </nav>





       <nav class="test uk-navbar-container " uk-navbar>

           <div class="uk-navbar-left">

<!--               <ul class="uk-navbar-nav">-->
<!--                   <li class="uk-active"><a href="#">Active</a></li>-->
<!--                   <li>-->
<!--                       <a href="#">Parent</a>-->
<!--                       <div class="uk-navbar-dropdown">-->
<!--                           <ul class="uk-nav uk-navbar-dropdown-nav">-->
<!--                               <li class="uk-active"><a href="#">Active</a></li>-->
<!--                               <li><a href="#">Item</a></li>-->
<!--                               <li><a href="#">Item</a></li>-->
<!--                           </ul>-->
<!--                       </div>-->
<!--                   </li>-->
<!--                   <li><a href="#">Item</a></li>-->
<!--               </ul>-->

           </div>

           <div class="uk-navbar-right">

               <ul class="uk-navbar-nav">
                   <li class="uk-active"><router-link class="me" to="/">Home</router-link></li>
                   <li class="uk-active"><router-link class="me" to="/about">About</router-link></li>
                   <li class="uk-active"><router-link class="me" to="/events">News and Events</router-link></li>
                   <li class="uk-active"><router-link class="me" to="/services">Services</router-link></li>
                   <li class="uk-active"><router-link class="me" to="/gallery">Gallery</router-link></li>
                   <li class="uk-active"><router-link class="me" to="/contact">Contact</router-link></li>


               </ul>

           </div>

       </nav>
   </div>
</template>

<script>
    export default {
        name: "navi"
    }
</script>

<style scoped>
.test{
    background: #202020 !important;
    /*border-bottom: 1px solid #db0f31;*/
}
.me{
    background: #202020 !important;

}
    img{
        width: 200px;
    }
     .me{
        color: #db0f31 !important;
    }
</style>
