<template>
  <div class="about" id="about">
    <div class="tab">
      <ul class="title flex">
        <li
          @click="activeIndex = i"
          :class="{ active: i == activeIndex }"
          v-for="(item, i) in titles"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  app: "about",
  data() {
    return {
      activeIndex: 0,
      titles: ["火车票", "汽车票", "飞机票"],
    };
  },
  created() {
    console.log(process.env.VUE_APP_BASE_API);
  },
  components: {},
};
</script>
<style lang="scss">
.tab {
  width: 500px;
  border: 1px solid red;
  height: 300px;
}
.flex {
  display: flex;
  padding-inline-start: 0px;
}
.title li {
  flex: 1;
  // padding: 10px 0;
  text-align: center;
  cursor: pointer;
  list-style: none;
}
.title li.active {
  border-bottom: 3px solid red;
  color: red;
}
</style>