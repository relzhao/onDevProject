<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        v-for="(item, index) in items"
        :key="index"
      >
        <el-image :src="item"></el-image>
      </el-col>
      <el-col :span="24" :offset="0"
        ><div id="chart" style="width: 100%; height: 300px"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var myChart = this.$echarts.init(document.getElementById("chart"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  data() {
    return {
      items: [
        require("../assets/bars.png"),
        require("../assets/catavento.png"),
        // require("../assets/cubechaos2.png"),
        // require("../assets/mountains-on-mars.png"),
        // require("../assets/stripe_background.png"),
      ],
    };
  },
  // components: {},
};
</script>
