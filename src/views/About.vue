<template>
  <div>
    <div class="flex">
      <Tabs ref="aa">
        <tabs-item tab="火车票"> 1111 </tabs-item>
        <tabs-item tab="汽车票"> 2222 </tabs-item>
        <tabs-item tab="飞机票"> 3333 </tabs-item>
      </Tabs>
      <Tabs ref="bb">
        <tabs-item tab="火车票"> 1111 </tabs-item>
        <tabs-item tab="汽车票"> 2222 </tabs-item>
        <tabs-item tab="飞机票"> 3333 </tabs-item>
      </Tabs>

      <!-- <div class="tab">
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
    </div> -->
    </div>
    <span>{{ realname }}{{ money_us }}--{{ age }}</span>
    <button @click="addAge"></button>
  </div>
</template>

<script>
import TabsItem from "../components/tabs/TabsItem";
import Tabs from "../components/tabs/Tabs";
import { mapState, mapGetters, mapActions } from "vuex";
// import store from "../store";
export default {
  app: "about",
  data() {
    return {
      activeIndex: 0,
      // titles: ["汽车票", "火车票", "飞机票"],
    };
  },
  computed: {
    ...mapState(["age"]),
    ...mapGetters(["realname", "money_us"]),
    ...mapActions(["addAgeAsync"]),
  },
  methods: {
    // addAge() { //同步执行
    //   this.$store.commit("addAge", {
    //     num: 5,
    //   });
    // },

    addAge() {
      //异步执行
      this.$store.dispatch("addAgeAsync", { num: 10 });
    },
  },
  created() {
    console.log(process.env.VUE_APP_BASE_API);
  },
  components: { Tabs: Tabs, TabsItem: TabsItem },
};
</script>
<style lang="scss">
.tab {
  width: 500px;
  height: 600px;
  border: 1px solid red;
}
.flex {
  display: flex;
  padding-inline-start: 0px;
}
.title li {
  flex: 1;
  text-align: center;
  cursor: pointer;
  list-style: none;
}
.title li.active {
  border-bottom: 3px solid red;
  color: red;
}
</style>
