<template>
    <div id="TamplateBase" style="background-color: #202020; ">
        <div class="uk-container  uk-padding">
            <div class="first">
                <div class= "uk-child-width-1-2@s uk-child-width-1-4@m uk-child-width-1-4@l uk-child-width-1-5@xl" uk-grid>

                    <div class="">
                        <img class=" uk-align-center" src="crab.png" alt="" style="max-width: 200px; max-height: 200px; height: auto; width: auto;">
                    </div>
                    <div class="first uk-visible@l" >
                        <h4 class="text-style">Useful Links</h4>
                        <ul class="text-style uk-list">
                            <li>Subscribe to Meme Galleries</li>
                            <li>Build a Meme</li>
                            <li>Chat With Customer Service</li>
                            <li>Call Customer Service</li>
                            <li>Careers at Meme Galleries</li>
                            <li>Muscle Crab Charity Events</li>
                            <li>Email Customer Service</li>
                        </ul>
                    </div>


                    <div class="uk-visible@m">

                        <h4 class="text-style ">External Links</h4>
                        <ul class="uk-list text-style">
                            <li>Schedule an Event</li>
                            <li>Schedule a Muscle Crab Speaker</li>
                            <li>Come to a WorkShop</li>
                            <li>Ethical Revivals</li>
                            <li>End Violence in Jamaica</li>
                            <li>Check on Order</li>
                        </ul>
                    </div>


                    <div class="">
                        <h4 class="text-style ">Contact</h4>
                        <ul class="uk-list text-style">
                            <li>Buy Muscle Crab SWAG</li>
                            <li>Design a TShirt</li>
                            <li>Design a Polo</li>
                            <li>Design a Coffee Mug/Cup</li>
                            <li>Pens</li>
                            <li>Key Chains</li>
                            <li>Become a Premium Member</li>
                        </ul>
                    </div>


                </div>
                <br>
                <div class="uk-text-center text-style" style="">
                    <a href="https://www.facebook.com/ncueducation/" target="_blank" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook" style="color: #3b5998; "></a>
                    <a href="https://www.instagram.com/ncu_jamaica/" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="instagram" style="color: #3b5998;  "></a>

                    <a href="https://www.flickr.com/photos/72113266@N04/" target="_blank" class="uk-icon-button  uk-margin-small-right" uk-icon="flickr" style="color: #ff0084; "></a>

                    <a href="https://jm.linkedin.com/school/northern-caribbean-university/" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="linkedin" style="color: #007bb6; "></a>

                    <a href="https://www.youtube.com/channel/UCaAlpTlb1Qk-S-UVGKtijKg" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="youtube" style="color: #bb0000; "></a>
                </div>
            </div>


        </div>

    </div>

</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
    #footer-page{
        background: #202020;
        margin-bottom: 0px;
        font-size: 1em;
        padding-top: 10px;
        padding-bottom: 0;
        color: white;
        border-top: 3px solid #A0DD35;
        text-align: left;
        position: fixed;
    }
    .text-style{
        color:white;
    }
    li,a{
        font-size: 15px;
        color:silver;
    }
    a:hover{
        font-size: 15px;
        color: #f0506e;
    }
    img
    {
        width:400px;
        padding-right: 0px;
        padding-bottom: 0px;


    }


    .first li{
        line-height: normal;
    }


    @media(max-width:635px)
    {
        .first h4, ul li a{
            padding-left: 70px;

        }

    }
    @media(max-width:960px){
        img{
            width:50px;
        }
    }


</style>
