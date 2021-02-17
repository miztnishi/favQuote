<template>
  <div class="home">
    <h1>{{meigen}}</h1>
    <div class="good">
      <!-- <button><img src="../assets/logo.png"></button> -->
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    meigen:''
  }),
  mounted() {
   this.axios.get('https://api.adviceslip.com/advice')
   .then((response ) => {
     this.meigen = response.data.slip.advice
   })
   .catch((error) => {
     alert('oops something wrong ' + error)
   })
  }
}
</script>

<style scoped>
h1{
  text-align:center;
  font-size:130px;
}
.good{
  background: red;
}
</style>