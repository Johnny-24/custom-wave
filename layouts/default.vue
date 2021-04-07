<template>
  <div>
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #263238;
  font-family: 'Robot', sans-serif;
  font-weight: 400;
  & * {
    box-sizing: border-box;
    user-select: none;
  }
}
.container {
  margin: 0 auto;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}
</style>
