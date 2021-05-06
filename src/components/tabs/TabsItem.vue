<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["tab"],
  data() {
    return {
      show: false,
    };
  },
  created() {
    // this.$parent.titles.push(this.tab);
    // console.log(this.$parent.titles.push(123));
    this.$parent.titles.push(this.tab); //通过铺设将子元素的tab赋值给父元素titles
  },
};
</script>
<style lang="scss"></style>
