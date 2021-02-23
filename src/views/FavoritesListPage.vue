<template>
  <div>
    <div class='fav' v-for="(favMeigen, index) in favList" :key="index">
      No.{{index + 1}} : {{favMeigen}}
    </div>
  </div>
</template>

<script>
export default {
  data:() => ({
    favList: [],
    response: ''
  }),
  mounted() {
    this.getFavList()
  },
  methods: {
    async getFavList () {
      const res = await this.$store.dispatch('favorite/getFavoritesList')
      console.log(res.data.favList)
      this.favList = res.data.favList
    }
  }
}
</script>

<style scoped>
.fav {
  font-size: 20px;
  font-weight: bold;
}
</style>