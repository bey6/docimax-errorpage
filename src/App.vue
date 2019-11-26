<template>
  <div id="app"></div>
</template>

<script>
import error from "./errorpage";
export default {
  name: "app",
  mounted() {
    error({
      msg: "错误提示",
      curl: "curl",
      origin: "errorpage",
      env: "dev",
      aurl: "aurl",
      clientid: "clientid"
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
}
</style>
