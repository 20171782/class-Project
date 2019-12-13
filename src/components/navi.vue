<template>
   <div class="top">
       <nav class="me uk-navbar-container" uk-navbar>

           <div class="uk-navbar-left">

               <ul class="uk-navbar-nav">

                   <li><a href="#"><router-link to="/"><img src="http://adl-asia.com/wp-content/uploads/2018/03/adl-logo-01.png" alt=""></router-link></a></li>
<!--                   <li><a href="#">Item</a></li>-->
               </ul>

           </div>
           <div class="uk-navbar-right uk-visible@l">
               <ul class="uk-navbar-nav">
                   <li class="uk-active"><router-link class="me" to="/">Home</router-link></li>
                   <li class="col">
                       <a href="#" uk-icon="chevron-down">About </a>
                       <div class="uk-navbar-dropdown">
                           <ul class="uk-nav uk-navbar-dropdown-nav uk-text-justify">
                               <li><router-link class="change" to="/about">About Us</router-link></li>
                               <li><router-link class="change" to="/Events">Services</router-link></li>
                               <li><router-link class="change" to="/Events">News And Events</router-link></li>
                               <li><router-link class="change" to="/policy">Our Policy</router-link></li>


                           </ul>
                       </div>
                   </li>
                    <li class="col">
                       <a href="#" uk-icon="chevron-down">Services</a>
                       <div class="uk-navbar-dropdown">
                           <ul class="uk-nav uk-navbar-dropdown-nav uk-text-justify">
                               <li><router-link class="change" to="/services">Services</router-link></li>
                               <li><router-link class="change" to="/transport">Transportation</router-link></li>
                               <li><router-link class="change" to="/order">Order Management</router-link></li>
                           </ul>
                       </div>
                   </li>
                   <li class="uk-active"><router-link class="me" to="/gallery">Gallery</router-link></li>
                   <li class="uk-active"><router-link class="me" to="/contact">Contact</router-link></li>

               </ul>
           </div>
       </nav>



<!--Small Nav-->
       <div class="uk-navbar-right uk-hidden@l">
           <div style="" class="uk-navbar-center-right">
               <ul class="uk-navbar-right" style="margin-left: 30px">adsdsadas
                   <li><a href="#offcanvas-slide" uk-toggle ><span uk-icon="menu" style="width:30px;color: #FF2500;margin-top: 30px"></span></a></li>
               </ul>
           </div>


           <!--<div id="offcanvas-slide" uk-offcanvas>-->

               <!--<div class="uk-offcanvas-bar">-->

                   <!--<a href="http://www.ncu.edu.jm" class="uk-button-link uk-text-center uk-align-center ">-->
                       <!--<img src=""  alt=""  style="width:100px;padding-top:50px">-->
                   <!--</a>-->

                   <!--<div class="uk-width-1-1@s ">-->
                       <!--<ul class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: false">-->
                           <!--<li><router-link class="uk-heading-bullet" @click.native="closeOffCanvas()" to="/">Home</router-link></li>-->

                           <!--<li class="uk-parent">-->
                               <!--<a class="uk-heading-bullet"  href="javascript:">About Us</a>-->
                               <!--<ul class="uk-nav-sub">-->
                                   <!--<li ><router-link class="uk-heading-bullet" to="/aboutus" @click.native="closeOffCanvas()">About the Department</router-link></li>-->
                                   <!--<li ><router-link class="uk-heading-bullet" to="/history" @click.native="closeOffCanvas()">History</router-link></li>-->
                                   <!--<li ><router-link class="uk-heading-bullet" to="/whyStudy" @click.native="closeOffCanvas()">Why Study Music </router-link></li>-->
                                   <!--<li ><router-link class="uk-heading-bullet" to="/faqs" @click.native="closeOffCanvas()">FAQ</router-link></li>-->
                                   <!--<li ><router-link class="uk-heading-bullet" to="/meetthefaculty" @click.native="closeOffCanvas()">Meet The Faculty</router-link></li>-->
                                   <!--<li ><router-link class="uk-heading-bullet" to="/studentstories" @click.native="closeOffCanvas()">Gallery</router-link></li>-->

                               <!--</ul>-->
                           <!--</li>-->

                           <!--<li class="uk-parent">-->
                               <!--<a class="uk-heading-bullet"  href="#">Academics</a>-->
                               <!--<ul class="uk-nav-sub">-->
                                   <!--<li><router-link class="uk-heading-bullet" to="/admission" @click.native="closeOffCanvas()">Admission </router-link></li>-->
                                   <!--<li><router-link class="uk-heading-bullet" to="/programs" @click.native="closeOffCanvas()">Programs </router-link></li>-->


                                   <!--&lt;!&ndash; <li><router-link class="uk-heading-bullet" to="/courses" @click.native="closeOffCanvas()">Core Course</router-link></li>&ndash;&gt;-->
                                   <!--<li><router-link class="uk-heading-bullet" to="/Goals" @click.native="closeOffCanvas()">Program Benefits & Goals</router-link></li>-->
                               <!--</ul>-->
                           <!--</li>-->



                           <!--<li><router-link to="/contactus">Contact Us</router-link></li>-->


                       <!--</ul>-->
                   <!--</div>-->

               <!--</div>-->
           <!--</div>-->


       </div>


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
    background: white !important;

}
    img{
        width: 200px;
    }
     .me,a{
        color: #FF2500 !important;
    }
.change{
        color: white !important;
    }
    .uk-navbar-dropdown{
        background:#FF2500;
    }
@media screen and (max-width: 360px) {
    nav {
        width: 100% !important;

    }  img {
           width: 150px !important;
           margin-right: 40px;
       }

}
@media screen and (min-width: 360px) {
    nav {
    //width: 100% !important;
    }
    img {
        width: 230px !important;
        margin-right: 40px;
    }
}
@media screen and (min-width: 480px) {
    nav {
    //width: 100% !important;
    }
    img {
        width: 290px !important;
        margin-right: 40px;
    }
}

@media screen and (min-width: 600px) {
    nav {
    //width: 1000px !important;
    }
    img {
        width: 320px !important;
        margin-right: 40px;
    }

}@media screen and (min-width: 768px) {
    nav {
    //width: 900px !important;
    }

}@media screen and (min-width: 960px) {
    img {
        width: 350px !important;
        margin-right: 40px;
    }

}@media screen and (min-width: 1200px) {
    img {
        width: 390px !important;
        margin-right: 40px;
    }

}
</style>
