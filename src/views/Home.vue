<template>
  <div class="home">
    <h1>{{meigen}}</h1>
    <div class="good">
      <!-- <GoodButton/> -->
      <GoodButton v-bind:meigen="meigen"/>
    </div>
  </div>
</template>

<script>
import GoodButton from '@/components/Button'
export default {
    components: { GoodButton },
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
.home{
  width: 100%;
  height: 90%;
  /* border: 1px solid; */
}
h1{
  text-align:center;
  font-size:100px;
}

</style>