<template>
  <div class="page">
    <h1>Great job!</h1>
    <button @click="go">Play Again?</button>
  </div>
</template>
<style scoped>
  .page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
import { startPageRoute } from './routing/routes'
export default {
  name: 'SuccessPage',
  methods: {
    go() {
      this.$router.push({ name: startPageRoute.name });
    }
  }
}
</script>
