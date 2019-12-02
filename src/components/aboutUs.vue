<template>
  <div class="hello">
    <navi></navi>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://cdn.pixabay.com/photo/2019/09/30/18/10/budapest-4516471__340.jpg" uk-img>
      <h1>Background Image</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uk-height-large {
  border-bottom-left-radius: 150px 50px;
  border-bottom-right-radius: 150px 50px;
}
</style>
