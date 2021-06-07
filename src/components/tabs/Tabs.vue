<template>
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
    <slot>w</slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      titles: [],
    };
  },
  mounted() {
    this.$children[0].show = true;
  },
  watch: {
    //监听
    activeIndex(index) {
      // index为 监测到的数据变化索引 即为所点击的DOM对象在序列中的索引
      this.$children.forEach((r, i) => {
        // r为遍历出的DOM对象，i为循环索引
        if (i === index) r.show = true;
        // 通过比较点击对象与循环索引比对 如一致则将当前点击对象show属性设为true 否则反之
        else r.show = false; // r.show = i === index 可以这样简写
      });
    },
  },
};
</script>
<style lang="scss"></style>
