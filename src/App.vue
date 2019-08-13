<template>
  <div id="app">
    <div ref="app">home words</div>
    <button @click="getRef">getRef</button>
    <router-link to="/foo">foo</router-link>
    <router-link to="/feed">feed</router-link>
    <router-link to="/feed">feed</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    getRef(){
      console.log(this.$refs)
    }
  }
}
</script>

<style>
</style>
