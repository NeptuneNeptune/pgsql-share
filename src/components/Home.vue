<template>
  <div class="home">
    <test-connection/>
    <router-view/>
  </div>
</template>

<script>
import TestConnection from "@/components/test-connection/TestConnection";

export default {
  name: 'Home',
  components: {
    TestConnection
  }
}
</script>

<style scoped>

</style>
