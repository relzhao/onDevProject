<!--
 * @Author: Rel
 * @Date: 2021-09-17 13:47:41
 * @LastEditTime: 2021-09-28 17:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/views/map/FullMap.vue
-->
<template>
  <div class="componets-container">
    <div class="currentCity" v-if="currentCity">
      当前城市： {{ currentCity }}
    </div>
    <div class="search-wrapper" v-show="amapOptions.isShowSearch">
      <van-search
        v-model="searchOptions.content"
        show-action
        placeholder="搜索地点、标记"
        autofocus
        @cancel="amapOptions.isShowSearch = !amapOptions.isShowSearch"
      />
      <van-tabs animated swipeable>
        <van-tab :title="setSumCustomer" :dot="searchOptions.isDot"
          >标记12</van-tab
        >
        <van-tab title="地点 0 个" badge="34">地点34</van-tab>
      </van-tabs>
    </div>
    <div class="detailList" v-show="detailOptions.isShowList">
      <!-- <van-search
        v-model="searchOptions.content"
        show-action
        placeholder="搜索地点、标记"
        autofocus
        @cancel="detailOptions.isShowList = !detailOptions.isShowList"
      /> -->
      <van-row>
        <van-col>
          <van-icon
            name="arrow-left"
            size="1.5rem"
            @click="resetDetailList()"
          />
        </van-col>
      </van-row>
      <van-tabs animated swipeable>
        <van-tab title="标记 0 个" :dot="searchOptions.isDot">{{
          detailOptions.item.customer
        }}</van-tab>
        <van-tab title="地点 0 个" badge="34">地点34</van-tab>
      </van-tabs>
    </div>
    <div class="panel" id="panel"></div>
    <!-- <div class="btn-gaode">
      <el-button type="primary" @click="navi">高德导航</el-button>
      <el-button type="success" @click="drive">路径规划</el-button>
    </div> -->
    <div class="my-map">
      <amap
        ref="mymap"
        view-mode="3D"
        :zoom="zoom"
        :center="p1"
        :pitch="pitch"
        :rotation="rotation"
        class="amap"
      >
        <amap-tool-bar />
        <amap-scale position="LB" />
        <amap-map-type />
        <amap-marker
          id="currentMarker"
          :key="233"
          :position="p1"
          :label="{
            content: amapOptions.myPosMarkerContent,
            direction: 'top',
          }"
        >
          <!-- <div>
            <div class="coordinate"></div>
            <div class="point"></div>
          </div> -->
        </amap-marker>
        <amap-marker
          @click="setDetailList(item)"
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

    <div class="amap-tools">
      <van-button
        @click="toggleSearch"
        icon="search"
        size="small"
        icon-position="left"
        class="btn-search"
        text="搜索"
      />
      <van-button
        @click="amapOptions.isShowTool = !amapOptions.isShowTool"
        icon="setting-o"
        size="small"
        icon-position="left"
        class="btn-tool"
        text="工具"
      />
    </div>
    <van-action-sheet v-model="amapOptions.isShowTool" title="标题">
      <div class="content">内容</div>
    </van-action-sheet>
    <!-- <van-popup v-model="amapOptions.isShowSearch">内容</van-popup> -->
    <van-tabbar v-model="tabbarActive">
      <van-tabbar-item name="home" icon="wap-home-o">主页</van-tabbar-item>
      <van-tabbar-item name="apps" icon="apps-o">工作台</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Amap from "@amap/amap-vue/lib/amap";
import AmapMarker from "@amap/amap-vue/lib/marker";
import {
  Tabbar,
  TabbarItem,
  Notify,
  Button,
  Popup,
  Search,
  Tab,
  Tabs,
  ActionSheet,
  Col,
  Row,
  Icon,
} from "vant";
// import { AMapManager } from "vue-amap";
// let amapManager = new AMapManager();
let AmapKey = "1993158c7088a31b2c6b1806b1bac30d";
export default {
  app: "about",
  data() {
    return {
      tabbarActive: "home",
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
      currentCity: null,
      domStyle: {
        "background-color": "#29b6f6",
        "border-color": "#e1f5fe",
        "font-size": "12px",
      },
      myPos: {
        customer: "我的位置",
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
      amapOptions: {
        isShowSearch: false,
        isShowTool: false,
        markerIcon: "https://s3.bmp.ovh/imgs/2021/09/6c6dd7b00b330be8.png",
        myPosMarkerContent: `<div class="markerTextDIY">我的位置</div>`,
      },
      searchOptions: {
        content: "",
        isDot: true,
        sumCustomers: null,
      },
      detailOptions: {
        isShowList: false,
        item: {
          customer: null,
        },
      },
    };
  },
  created() {
    Promise.all([this.getCustomer1()]).then(() => {
      this.customers = null;
      this.customers = this.$store.state.customer.customers;
      console.log(this.customers.length);
      this.searchOptions.sumCustomers = "标记 " + this.customers.length + " 个";
    });
  },
  mounted() {
    setTimeout(() => {
      let self = this;
      let AMap = this.$refs.mymap.$amap.context.AMap;
      // let map = this.$refs.mymap.$map;
      let getDistance = (s, e) => {
        return AMap.GeometryUtil.distance(s, e);
      };
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        geolocation.getCurrentPosition(function (status, result) {
          if (status == "complete") {
            console.log(result);
            let pos = [result.position.lng, result.position.lat];
            self.p1 = pos;
            console.log(result);
            console.log(self.p1);
            // alert(result.location_type);
            if (!result.isConverted) {
              let convertedPos = convertFrom(pos);
              self.p1 = convertedPos;
              return;
            }
          } else if (status == "error") {
            Notify({
              type: "danger",
              message: "定位失败：" + result.message + " \n请刷新浏览器再试",
            });
          }
        });
      });
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
          let starPos = this.string2Float(minPathArr[i].location);

          let endPos = this.string2Float(customersArr[j].location);
          let minPathCom = getDistance(starPos, endPos);
          if (pathTemp != null && minPathCom < pathTemp.distance) {
            let data = {
              customer: customersArr[j].customer,
              location: customersArr[j].location,
              distance: minPathCom,
            };
            minPathArr[i + 1] = customersArr[j];
            pathTemp = data;
          }
        }
      }
      this.minPath = minPathArr;

      // AMap.plugin("AMap.Driving", function () {
      //   var driving = new AMap.Driving({
      //     // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
      //     policy: AMap.DrivingPolicy.LEAST_TIME,
      //     map: map,
      //     panel: "panel",
      //   });
      //   var opts = {
      //     // 途经点参数，最多支持传入16个途经点
      //     waypoints: [],
      //   };
      //   self.minPath.forEach((element) => {
      //     console.log(self.string2Float(element.location));
      //     opts.waypoints.push(self.string2Float(element.location));
      //   });

      //   var startLngLat = self.string2Float(self.minPath[0].location);
      //   var endLngLat = self.string2Float(
      //     self.minPath[self.minPath.length - 1].location
      //   );
      //   driving.search(startLngLat, endLngLat, opts, function (status, result) {
      //     // 未出错时，result即是对应的路线规划方案
      //     console.log(status);
      //     console.log(result);
      //   });
      // });
      let convertFrom = function (gps) {
        AMap.convertFrom(gps, "gps", function (status, result) {
          if (result.info === "ok") {
            console.log(result);
            Notify({
              type: "primary",
              message: result.locations[0].lng + "," + result.locations[0].lat,
            });
            return [result.locations[0].lng, result.locations[0].lat];
          } else {
            Notify({
              type: "danger",
              message: "转换失败：" + status + " 请刷新浏览器再试",
            });
          }
        });
      };

      AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            self.currentCity = result.province + " - " + result.city;
            console.log(result);
          }
        });
      });
      // console.log(window.AMap.GeometryUtil);
    }, 3000);
  },
  methods: {
    toggleSearch() {
      this.amapOptions.isShowSearch = !this.amapOptions.isShowSearch;
      this.searchOptions.sumCustomers = this.customers.length;
      console.log(this.searchOptions.sumCustomers);
    },
    resetDetailList() {
      this.detailOptions.isShowList = !this.detailOptions.isShowList;
      if (this.detailOptions.item != null) this.detailOptions.item = [];
    },
    setDetailList(item) {
      this.detailOptions.isShowList = !this.detailOptions.isShowList;
      this.detailOptions.item.customer = item.customer;
      console.log(this.detailOptions);
      // return;
    },
    showTest() {
      // console.log(123333);
      alert("showTest");
    },
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
      for (let i = 0; i < arr.length; i++) {
        let end =
          i + 1 >= arr.length
            ? this.string2Float(arr[0].location)
            : this.string2Float(arr[i + 1].location);
        let star = this.string2Float(arr[i].location);
        let textPos = this.arrayPosDivide(star, end);
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
          // for (let index = 0; index < response.length; index++) {
          //   const element = response[index];

          // }
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
              console.log(response);
              this.$store.dispatch("customer/getGeocode", response);
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCustomer1() {
      this.$store.dispatch("customer/getCustomer1").then((response) => {
        response.map((item) => {
          return new Promise((resolve) => {
            this.$store.dispatch("customer/getGeocode1", item);
            resolve();
          });
        });
      });
    },
    // getDistance(s, e) {
    //   setTimeout(() => {
    //     return this.$refs.mymap.$amap.context.AMap.GeometryUtil.distance(s, e);
    //   }, 500);
    // },
  },
  computed: {
    setSumCustomer: () => {
      this.customers = 0;
      if (this.customers !== undefined) {
        return "标记 " + this.customers.length + " 个";
      }
      return "标记 " + 0 + " 个";
    },
  },
  components: {
    Amap,
    AmapMarker,
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem,
    vanButton: Button,
    // eslint-disable-next-line vue/no-unused-components
    vanPopup: Popup,
    vanSearch: Search,
    vanTab: Tab,
    vanTabs: Tabs,
    vanActionSheet: ActionSheet,
    vanCol: Col,
    vanRow: Row,
    vanIcon: Icon,
  },
};
</script>
<style lang="scss">
@import "~@/styles/mobileStyle/index.scss";
.coordinate {
  width: 28px;
  height: 28px;
  background-color: #f24234;
  border-radius: 39px 17px 39px 0px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.point {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  margin: 0px 0 0 8px;
  -webkit-transform: rotateX(55deg);
  -moz-transform: rotateX(55deg);
  -o-transform: rotateX(55deg);
  -ms-transform: rotateX(55deg);
  transform: rotateX(55deg);
}
.markerTextDIY {
  border: 1px solid red;
}
</style>
