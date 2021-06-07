<template>
  <div class="home">
    <el-row>
      <div
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        v-for="(item, index) in items"
        :key="index"
      >
        <el-image :src="item"></el-image>
      </div>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {},
  methods: {},
  data() {
    return {
      items: [
        require("../assets/bars.png"),
        require("../assets/catavento.png"),
        require("../assets/cubechaos2.png"),
        require("../assets/mountains-on-mars.png"),
        require("../assets/stripe_background.png"),
      ],
    };
  },
  // components: {},
};
</script>
<style lang="scss">
.home {
  overflow: hidden;
}
</style>