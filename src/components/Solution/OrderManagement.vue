<template>
    <div>
    <div class="hello uk-section-muted">
        <navi></navi>
        <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://cdn.pixabay.com/photo/2019/09/30/18/10/budapest-4516471__340.jpg" uk-img>
            <h1>Order Management</h1>
        </div>
<div class="uk-section uk-section-muted uk-text-center" >
<div class=" uk-container">
    <h3>FAST DELIVERY. MORE CUSTOMERS. MINIMAL EFFORT.</h3>
    <p>We grow your business by getting you closer to your customers with guaranteed 2 day delivery. Increase your sales today with Ware2Go!</p>
    <p>At its most basic level, Order Management is the organization of purchase orders to identify cost and
        efficiency gains. However, with the cascade of data available through modern technology, order management has evolved into one of the most complex aspects of the global supply chain.</p>
</div>
</div>
   <div class="me uk-container">
       <div class=" uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
           <div class="uk-card-media-left uk-cover-container">
               <img src="https://images.pexels.com/photos/1543924/pexels-photo-1543924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" uk-cover>
               <canvas width="600" height="400"></canvas>
           </div>
           <div>
               <div class="uk-card-body uk-text-justify">
                   <h3 class="uk-card-title">GLOBAL COMMERCE</h3>
                   <p>Companies are continuously exchanging information to determine product design standards, manufacturing specifications, order quantities, and delivery terms. Physical activities like trucking, warehouse delivery, order packing, and quality assurance are intimately linked to this information flow. Together these two work-streams form the backbone of international commerce. This is where expertise in refining the order management process becomes critical to success.</p>
               </div>
           </div>
       </div>
   </div>
<order></order>
</div>


    </div>
</template>

<script>
    import order  from '@/components/Solution/order.vue'
    export default {
        name: 'OrderManagement',
        props: {
            msg: String
        },
        components:{
            order
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .uk-height-large {
        border-bottom-left-radius: 150px 50px;
        border-bottom-right-radius: 150px 50px;
    }
    .me{
        padding-top: 100px;
        margin-bottom: 100px;
    }
    h3{
        color:#FF2500 !important;
    }
</style>
