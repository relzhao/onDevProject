<template>
  <div id="app2">
    <h1>我就试试看{{ study }} 怎么使的?</h1>
    <div>{{ study }} 真是{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "copdem",
  props: {
    msg: String,
    study: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
