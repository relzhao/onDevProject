<!--
 * @Author: your name
 * @Date: 2021-06-08 01:16:13
 * @LastEditTime: 2021-09-04 02:03:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/views/About.vue
-->
<template>
  <div class="componets-container">
    <div class="btn-gaode">
      <el-button type="primary" @click="navi">高德导航</el-button>
      <el-button type="success" @click="drive">路径规划</el-button>
    </div>
    <div class="my-map">
      <amap
        view-mode="3D"
        :zoom="zoom"
        :center="position"
        :pitch="pitch"
        :rotation="rotation"
        class="amap"
      >
        <amap-marker
          v-for="(item, index) in customers"
          :key="index"
          :position="string2Float(item.location)"
          :label="{
            content: item.customer, //文本内容
            direction: 'left', // 文本显示在标签的方向
          }"
          draggable
        />
      </amap>
    </div>
  </div>
</template>

<script>
import Amap from "@amap/amap-vue/lib/amap";
import AmapMarker from "@amap/amap-vue/lib/marker";
// import request from "@/utils/request";

let AmapKey = "1993158c7088a31b2c6b1806b1bac30d";
export default {
  app: "about",
  data() {
    return {
      position: [120.742959, 31.266732], // 地点
      center: [120.742959, 31.266732], // 居中点
      zoom: 16, //缩放比例
      pitch: 30,
      rotation: 0,
      customers: {},
    };
  },
  created() {
    // request({
    //   url: `https://restapi.amap.com/v3/geocode/geo?key=${AmapKey}&address=${this.customer[0].add}${this.customer[0].customer}`,
    //   method: "get",
    // });
    this.getCustomer();
  },
  methods: {
    string2Float(str) {
      let temp = str.split(",");
      let a = [parseFloat(temp[0]), parseFloat(temp[1])];
      return a;
    },
    navi() {
      let url =
        "androidamap://navi?sourceApplication=chrome&poiname=阿东汽车维修中心&lat=31.365583&lon=120.999044&dev=0&style=2";
      window.open(url, "_blank");
    },
    drive() {
      let url =
        "amapuri://route/plan/?did=蓝点汽车&dlat=31.365583&dlon=120.999044&dname=B&dev=0&t=0";
      window.open(url, "_blank");
    },
    getCustomer() {
      this.$store
        .dispatch("customer/getCustomer")
        .then((response) => {
          this.customers = response;
          this.customers.forEach((element) => {
            // console.log(element.add);
            this.$store
              .dispatch("customer/getGeocode", {
                AmapKey: AmapKey,
                address: element.add,
                customer: element.customer,
              })
              .then(() => {
                this.customers = this.$store.state.customer.customers;
                console.log(this.customers);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Amap,
    AmapMarker,
  },
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
.componets-container {
  position: relative;
  height: 100%;
  // margin: 30px 50px;
}
.my-map {
  width: 100%;
  height: calc(100vh - 70px);
}
</style>
