<template>
<div class="button">
  <!-- <button v-on:click="saveQuote" :disabled="isValid" v-bind:class="{btnDisabled:isValid}">Good!</button> -->
  <button v-on:click="saveQuote" :disabled="btnDisabled" v-if="!isValid">Good!</button>
  <div>{{this.message}}</div>
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
    message: 'aaaaa',
    resMeigen: '',
    btnDisabled: false
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
      this.message += 1;
    },
    saveQuote () {
      //console.log(this.meigen)
      // if(this.btnDisabled === true){
      //   this.message = 'すでに登録されています'
      //   return
      // }
      this.$store.dispatch('favorite/saveFavorite',{
        data: this.meigen
      }).then((response) => {
        this.resMeigen = response
        this.btnDisabled = true
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