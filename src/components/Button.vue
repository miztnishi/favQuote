<template>
<div class="button">
  <!-- <button v-on:click="saveQuote" :disabled="isValid" v-bind:class="{btnDisabled:isValid}">Good!</button> -->
  <button v-on:click="saveQuote" v-if="!isValid">Good!</button>
  <div>{{counter}}</div>
  <div>{{this.resMeigen}}</div>
</div>
</template>

<script>
export default {
  props:{
     meigen: {
      type: String,
      default: '',
      required: true
    }
  },
  data:() =>({
    counter: 0,
    resMeigen: ''
  }),
  computed:{
    isValid() {
       if (this.meigen.length < 1){
         return true
       } else {
         return false
       }
    }
  },
  methods:{
    addCounter () {
      this.counter += 1;
    },
    saveQuote () {
      //console.log(this.meigen)
      this.$store.dispatch('favorite/saveFavorite',{
        data: this.meigen
      }).then((response) => {
        console.log("response:" + response.data.meigen)
        this.resMeigen = response.data.meigen
      })
    }
  }
}
</script>

<style>
button {
  position:relative;
  display:inline-block;
  padding: 12px 36px;
  margin: 10px 0;
  color:#fff;
  text-emphasis: none;
  font-size: 18px;
  letter-spacing:2px;
  border-radius: 40px;
  background: linear-gradient(90deg,#0162c8,#55e7fc);
  outline: none;
  border: 1px;
}
/* button.btnDisabled {
  background: #666;
  color:#222;
} */
</style>