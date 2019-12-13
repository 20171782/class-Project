<template>
<div style="background-color: #FF2500;border-radius: 100px">
    <div class="top uk-container uk-container-small">
        <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="https://cdn.pixabay.com/photo/2014/11/17/03/15/business-idea-534228__340.jpg" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body uk-text-justify">
                    <h3 class="uk-card-title uk-text-bold uk-heading-bullet">Mission Statement</h3>
                    <p class="">Our mission is to be a leader in ocean transportation and logistics where employees partner
                        with customers to provide the highest level of service without exception. This statement has
                        been our creed since our inception and has driven our success for over fifteen years of service to
                        businesses throughout the Americas. We proudly provide service to more than thirty countries
                        with each office and location contributing towards our success as a promoter of trade throughout
                        the Western Hemisphere.</p>
                </div>
            </div>
        </div>

        <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                <img src="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body uk-text-justify">
                    <h3 class="uk-card-title uk-text-bold uk-heading-bullet">Vision Statement</h3>
                    <p>ADL Logistics seeks to be a premier, profitable provider of global supply-chain services to help enable sustainable trade and commerce in key markets and regions. We will accomplish this by investing in our people, our facilities and in technology. We will continue to build and nurture a culture promoting challenge, inquiry and a continual focus on the customer.</p>
                </div>
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
    padding: 40px;

}
    .uk-card-title,p{
        color: white;
    }
</style>
