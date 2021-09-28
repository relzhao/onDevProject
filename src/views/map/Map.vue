<!--
 * @Author: your name
 * @Date: 2021-06-08 01:16:13
 * @LastEditTime: 2021-09-17 18:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/views/About.vue
-->
<template>
  <div class="componets-container">
    <div class="panel" id="panel"></div>
    <div class="btn-gaode">
      <el-button type="primary" @click="navi">高德导航</el-button>
      <el-button type="success" @click="drive">路径规划</el-button>
    </div>
    <div class="my-map">
      <!-- <el-amap
        :amap-manager="amapManager"
        class="amap-box"
        :vid="'amap-vue'"
        :center="center"
        :zooms="zoom"
      >
        <el-amap-marker
          :key="index"
          v-for="(item, index) in this.customers"
          :position="string2Float(item.location)"
          :label="{
            content: item.customer,
            offset: [0, -23], //XY
          }"
        >
        </el-amap-marker>
      </el-amap> -->
      <amap
        ref="mymap"
        view-mode="3D"
        :zoom="zoom"
        :center="position"
        :pitch="pitch"
        :rotation="rotation"
        class="amap"
      >
        <amap-marker
          v-for="(item, index) in minPath"
          :key="index"
          :position="string2Float(item.location)"
          :label="{
            content: item.customer, //文本内容
            direction: 'left', // 文本显示在标签的方向
          }"
        />
        <amap-polyline
          stroke-color="#ce37ef"
          :stroke-weight="strokeWeight"
          v-for="(linepos, index) in polylinePos"
          :path="[linepos[0], linepos[1]]"
          :key="index + linepos"
        />
        <amap-text
          v-for="(txtpos, index) in polylinePos"
          :position="txtpos[2]"
          :text="'两地相距 ' + Math.round(txtpos[3]).toString() + ' 米'"
          :key="index + txtpos + '1'"
          :offset="[-55, -20]"
          :domStyle="domStyle"
        />
      </amap>
    </div>
  </div>
</template>

<script>
import Amap from "@amap/amap-vue/lib/amap";
import AmapMarker from "@amap/amap-vue/lib/marker";
// import { AMapManager } from "vue-amap";
// let amapManager = new AMapManager();
let AmapKey = "1993158c7088a31b2c6b1806b1bac30d";
export default {
  app: "about",
  data() {
    return {
      position: [120.670337, 31.272715], // 辰雷地点
      center: [120.673751, 31.267588], // 居中点
      zoom: 16, //缩放比例
      pitch: 30, //倾斜率
      rotation: 0, //旋转
      // amapManager,
      customers: {},
      p1: [120.673751, 31.267588],
      polylinePos: [],
      minPathPoi: [],
      strokeWeight: 5, //polyline 宽度
      domStyle: {
        "background-color": "#29b6f6",
        "border-color": "#e1f5fe",
        "font-size": "12px",
      },
      myPos: {
        customer: "辰雷科技园",
        address: "江苏省苏州市吴中区群星一路1号",
        location: "120.670337, 31.272715",
        formatted_address: "江苏省苏州市吴中区辰雷科技园",
        province: "江苏省",
        city: "苏州市",
        district: "吴中区",
        citycode: "0512",
        adcode: "320506",
        level: "开发区",
      },
      minPath: [],
    };
  },
  created() {
    Promise.all([this.getCustomer()]).then(() => {
      this.customers = null;
      this.customers = this.$store.state.customer.customers;
    });
  },
  mounted() {
    setTimeout(() => {
      let AMap = this.$refs.mymap.$amap.context.AMap;
      let map = this.$refs.mymap.$map;
      let getDistance = (s, e) => {
        return AMap.GeometryUtil.distance(s, e);
      };
      let minPathArr = [this.myPos];
      let pathTemp = { customer: "test", distance: 99999999999999999 };

      var customersArr = this.customers;
      customersArr.splice(0, 0, this.myPos);
      for (let i = 0; i < customersArr.length; i++) {
        pathTemp = { customer: "test", distance: 99999999999999999 };
        for (let j = 0; j < customersArr.length; j++) {
          if (this.isRepeat(customersArr[j], minPathArr)) {
            continue;
          }
          // console.log(minPathArr[i], i);
          let starPos = this.string2Float(minPathArr[i].location);
          let endPos = this.string2Float(customersArr[j].location);
          let minPathCom = getDistance(starPos, endPos);
          // console.log(
          //   "当前对象：  " + minPathArr[i].customer,
          //   customersArr[j].customer
          // );
          // console.log("距离： " + minPathCom, pathTemp.distance);
          if (pathTemp != null && minPathCom < pathTemp.distance) {
            let data = {
              customer: customersArr[j].customer,
              location: customersArr[j].location,
              distance: minPathCom,
            };
            minPathArr[i + 1] = customersArr[j];
            // console.log("将添加至临时： " + customersArr[j].customer);
            pathTemp = data;
          }
        }
        // console.log(pathTemp);
        // minPathArr.push(pathTemp);
        // console.log(minPathArr);
      }
      console.log(minPathArr);

      this.minPath = minPathArr;
      console.log(this.minPath);
      // this.drawLine(this.minPath);
      console.log(this.$refs.mymap);
      console.log(this.$refs.mymap.$amap.context.AMap.Map);
      let self = this;
      AMap.plugin("AMap.Driving", function () {
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          policy: AMap.DrivingPolicy.LEAST_TIME,
          map: map,
          panel: "panel",
        });
        var opts = {
          // 途经点参数，最多支持传入16个途经点
          waypoints: [],
        };
        self.minPath.forEach((element) => {
          console.log(self.string2Float(element.location));
          opts.waypoints.push(self.string2Float(element.location));
        });

        var startLngLat = self.string2Float(self.minPath[0].location);
        var endLngLat = self.string2Float(
          self.minPath[self.minPath.length - 1].location
        );
        driving.search(startLngLat, endLngLat, opts, function (status, result) {
          // 未出错时，result即是对应的路线规划方案
          console.log(status);
          console.log(result);
        });
      });
      // console.log(window.AMap.GeometryUtil);
    }, 3000);
  },
  methods: {
    isRepeat(arr, arr2) {
      var has = null;
      for (let a = 0; a < arr2.length; a++) {
        if (arr.customer === arr2[a].customer) {
          has = true;
        }
      }
      return has;
    },
    drawLine(arr) {
      // console.log(window.AMap.GeometryUtil);
      for (let i = 0; i < arr.length; i++) {
        let end =
          i + 1 >= arr.length
            ? this.string2Float(arr[0].location)
            : this.string2Float(arr[i + 1].location);
        let star = this.string2Float(arr[i].location);
        let textPos = this.arrayPosDivide(star, end);
        // console.log(text);
        // console.log([star, end]);
        // console.log(23);
        this.polylinePos.push([star, end, textPos]);
      }
    },
    string2Float(str) {
      let temp = str.split(",");
      let float = [parseFloat(temp[0]), parseFloat(temp[1])];
      return float;
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
    arrayPosDivide(arr1, arr2, divide = 2) {
      return [
        arr1[0] / divide + arr2[0] / divide,
        arr1[1] / divide + arr2[1] / divide,
      ];
    },
    getCustomer() {
      this.$store
        .dispatch("customer/getCustomer")
        .then((response) => {
          response.map((item) => {
            return new Promise((resolve) => {
              let url = `https://restapi.amap.com/v3/geocode/geo?key=${AmapKey}&address=${item.add}${item.customer}`;
              let dic = {
                url: url,
                add: item.add,
                customer: item.customer,
              };
              resolve(dic);
            }).then((response) => {
              this.$store.dispatch("customer/getGeocode", response);
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // getDistance(s, e) {
    //   setTimeout(() => {
    //     return this.$refs.mymap.$amap.context.AMap.GeometryUtil.distance(s, e);
    //   }, 500);
    // },
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
  height: calc(100vh - 90px);
}
.amap-txt-marker {
  border: 1px #f9cb33 solid;
  border-radius: 3px;
  background: #f9cb33;
}
.panel {
  position: fixed;
  background-color: white;
  max-height: 70%;
  top: 0px;
  right: 0px;
  width: 280px;
  z-index: 100;
  margin-top: 95px;
  margin-right: 5px;
}
</style>
