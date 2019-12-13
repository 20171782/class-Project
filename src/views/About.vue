<template>
  <div class="about">
    <about></about>
    <div uk-filter="target: .js-filter">

      <div class="uk-container uk-text-center">
          <ul class="me">
<!--              <li class="uk-button uk-button-danger" uk-filter-control=".all"><a  href="#">all <span uk-icon="icon: arrow-down"></span></a></li>-->
              <li class="uk-button " uk-filter-control=".overview"><a href="#">overview<span uk-icon="icon: arrow-down"></span></a></li>
              <li class="uk-button " uk-filter-control=".progress"><a href="#">progress<span uk-icon="icon: arrow-down"></span></a></li>
              <li class="uk-button " uk-filter-control=".staff"><a href="#">staff<span uk-icon="icon: arrow-down"></span></a></li>

              <li class="uk-button " uk-filter-control=".standards"><a href="#">standards<span uk-icon="icon: arrow-down"></span></a></li>
          </ul>
      </div>

      <ul class="js-filter uk-child-width-1-1 uk-text-center" uk-grid>

<!--          <li class="all">-->
<!--              <div class="uk-card ">-->
<!--                  <overview></overview>-->
<!--                  <Pro></Pro>-->
<!--                  <staff></staff>-->
<!--                  <standards></standards>-->
<!--              </div>-->
<!--          </li>-->



        <li class="overview">
          <div class="uk-card "><overview></overview></div>
        </li>
          <li class="progress">
              <div class="uk-card "><Pro></Pro></div>
          </li>
        <li class="staff">
          <div class="uk-card "><staff></staff></div>
        </li>

        <li class="standards">
          <div class="uk-card "><standards></standards></div>
        </li>

      </ul>

    </div>

  </div>
</template>


<script>
  import about from '@/components/aboutUs.vue'
  import staff from '@/components/about/staff.vue'
  import overview from '@/components/about/Overview.vue'
  import standards from '@/components/about/standards.vue'
  export default {
    components:{
      about,
      overview,
      standards,
      staff
    }
  }
</script>

<style scoped>
li{margin-top:30px}
.uk-button{margin-right:5px;border-radius: 5px }

    a{color:white !important;}
    a :hover{ text-decoration: none;
    }
    .me li {
        background-color: #FF2500;
    }
</style>
