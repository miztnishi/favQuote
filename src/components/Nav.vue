<template>
  <div class="navbar">
      <ul class="">
          <router-link  to="/">Home</router-link>
          <router-link  to="/favorites"> Favorites</router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  /* background-color:blue; */
  border: 1px solid;
  }
ul {
  margin-bottom : 0;
  font-size : 18px;
  font-weight : 900;
  text-align: center;
}
a {
  color:grey;
}
a.router-link-exact-active {
  color:red;
}
</style>