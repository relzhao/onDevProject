<template>
<<<<<<< HEAD
  <div class="about" id="about">
    <div class="tab">
=======
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
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54
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
<<<<<<< HEAD
    </div>
=======
    </div> -->
    </div>
    <span>{{ realname }}{{ money_us }}--{{ age }}</span>
    <button @click="addAge"></button>
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import TabsItem from "../components/tabs/TabsItem";
import Tabs from "../components/tabs/Tabs";
import { mapState, mapGetters, mapActions } from "vuex";
// import store from "../store";
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54
export default {
  app: "about",
  data() {
    return {
      activeIndex: 0,
<<<<<<< HEAD
      titles: ["火车票", "汽车票", "飞机票"],
    };
  },
  created() {
    console.log(process.env.VUE_APP_BASE_API);
  },
  components: {},
=======
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
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54
};
</script>
<style lang="scss">
.tab {
  width: 500px;
<<<<<<< HEAD
  border: 1px solid red;
  height: 300px;
=======
  height: 600px;
  border: 1px solid red;
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54
}
.flex {
  display: flex;
  padding-inline-start: 0px;
}
.title li {
  flex: 1;
<<<<<<< HEAD
  // padding: 10px 0;
=======
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54
  text-align: center;
  cursor: pointer;
  list-style: none;
}
.title li.active {
  border-bottom: 3px solid red;
  color: red;
}
</style>
