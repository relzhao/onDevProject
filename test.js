/*
 * @Author: your name
 * @Date: 2021-09-04 18:02:56
 * @LastEditTime: 2021-09-28 09:18:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/test.js
 */
// /*
//  * @Author: your name
//  * @Date: 2021-09-04 18:02:56
//  * @LastEditTime: 2021-09-04 18:42:44
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: /onDevProject/test.js
//  */

// // console.time("test");
// // var list = [1, 2, 3];

// // var queue = list.map((item) => {
// //   return new Promise((resolve, rejcet) => {
// //     setTimeout(() => {
// //       resolve(item);
// //     }, 1000);
// //   });
// // });
// // Promise.all(queue).then((res) => {
// //   console.log(res);
// // });

// // console.timeEnd("test");

// let a = [
//   {
//     customer: "小张汽修",
//     add: "江苏省苏州市吴中区苏州工业园区通园路209号南区工业小区1幢",
//   },
//   {
//     customer: "途虎养车工场店（苏州东环南路店）",
//     add: "江苏省苏州市吴中区东环南路999号中博科技园内",
//   },
//   {
//     customer: "科邦精工车博士高端汽车专修园区店",
//     add: "江苏省苏州市吴中区群星一路28号（福特4S店附近）",
//   },
//   {
//     customer: "彬程汽修一站式服务",
//     add: "江苏省苏州市吴中区通达路1875-2号",
//   },
//   {
//     customer: "美尚生活养车馆",
//     add: "江苏省苏州市吴江区江陵东路与泾陵路交叉口加油站对面贤都时代广场内",
//   },
//   {
//     customer: "兄弟连汽修服务（宽途汽车店）",
//     add: "江苏省苏州市吴中区前珠路7号",
//   },
//   {
//     customer: "牛牛养车",
//     add: "江苏省苏州市吴中区中山南路1759号（上领大厦附近）",
//   },
//   {
//     customer: "阿东汽车维修中心",
//     add: "江苏省昆山市巴城镇古城路4009号",
//   },
// ];
// let AmapKey = "1993158c7088a31b2c6b1806b1bac30d";
// a.map((item) => {
//   console.log(
//     `https://restapi.amap.com/v3/geocode/geo?key=${AmapKey}&address=${item.add}${item.customer}`
//   );
// });

// const a = [120.670337, 31.272715];
// const b = [120.673751, 31.267588];
// const arrayPosDivide = (arr1, arr2, divide = 2) => {
//   return [
//     arr1[0] / divide + arr2[0] / divide,
//     arr1[1] / divide + arr2[1] / divide,
//   ];
// };

// console.log(arrayPosDivide(a, b));
// 120.672044, 31.2701515

// for (let i = 0; i < this.customers.length; i++) {
//   for (let j = this.customers.length - 1; j >= 0; j--) {
//     if (this.customers[i].customer === this.customers[j].customer) {
//       break;
//     }
//     let starPos = this.string2Float(this.customers[i].location);
//     let endPos = this.string2Float(this.customers[j].location);
//     let txtPos = this.arrayPosDivide(starPos, endPos);
//     let midPos = getDistance(starPos, endPos);
//     let desc =
//       this.customers[i].customer + " ———— " + this.customers[j].customer;
//     this.polylinePos.push([starPos, endPos, txtPos, midPos, desc]);
//   }
// }

// let arr = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
//   }
// }

// let ab = [
//   "120.670337,31.272715",
//   {
//     customer: "小张汽修",
//     address: "江苏省苏州市吴中区苏州工业园区通园路209号南区工业小区1幢",
//     location: "120.666361,31.276769",
//     formatted_address: "江苏省苏州市吴中区小张汽修",
//     province: "江苏省",
//     city: "苏州市",
//     district: "吴中区",
//     citycode: "0512",
//     adcode: "320506",
//     level: "兴趣点",
//   },
// ];
// for (var i = 0; i < ab.length; i++) {
//   console.log(ab[i]);
// }
// ab[1]["dis"] = "12344";
// console.log(ab);

// var cus = ["小张", "小米"];
// console.log(cus.indexOf("小米1"));

// let b1 = null;
// let c = b1.dis||
// if (b1.dis || b1 == null) {
//   b1.dis = 1;
// }
// console.log(b1);

// setTimeout(() => {
//   let getDistance = (s, e) => {
//     return this.$refs.mymap.$amap.context.AMap.GeometryUtil.distance(s, e);
//   };
//   let minPathArr = [this.myPos];
//   let pathTemp = null;
//   let noRepeatArr = [];
//   for (let i = 0; i < this.customers.length; i++) {
//     for (let j = 0; j < this.customers.length; j++) {
//       if (minPathArr[i].customer == this.customers[j].customer) {
//         console.log(
//           "重复 " + minPathArr[i].customer,
//           this.customers[j].customer
//         );
//         continue;
//       } else if (noRepeatArr.indexOf(this.customers[j].customer) >= 0) {
//         console.log(this.customers[j].customer, minPathArr[i].customer);
//         console.log("出现了重复，即将跳出当前循环体");
//         continue;
//       }
//       console.log("j: " + j, "i: " + i);
//       var starPos = this.string2Float(minPathArr[i].location);
//       let endPos = this.string2Float(this.customers[j].location);

//       let minPathCom = getDistance(starPos, endPos);
//       console.log(
//         "起点: " + minPathArr[i].customer,
//         "终点: " + this.customers[j].customer + " 距离: " + minPathCom
//       );

//       if (j === 0) {
//         // console.log(minPathArr[i]);
//         // minPathArr[i]["distance"] = minPathCom;
//         // pathTemp = minPathArr[i];
//         let data = {
//           customer: minPathArr[i].customer,
//           location: minPathArr[i].location,
//           distance: minPathCom,
//         };
//         pathTemp = data;
//         noRepeatArr.push(minPathArr[i].customer);
//         console.log("将添加至不重复列表 " + minPathArr[i].customer);
//         console.log("J等于零，将添加至pathTemp  " + data.customer);
//         continue;
//       }
//       console.log(minPathCom, pathTemp.distance);
//       if (minPathCom < pathTemp.distance) {
//         let data = {
//           customer: this.customers[j].customer,
//           location: this.customers[j].location,
//           distance: minPathCom,
//         };
//         pathTemp = data;
//         noRepeatArr.push(this.customers[j].customer);
//         console.log("将添加至不重复列表 " + minPathArr[j].customer);
//         console.log("将添加至PathTemp  " + data.customer);
//       }
//       // console.log(this.customers[j]);
//     }
//     console.log("经历一轮内循环，pathTemp值如下：");
//     console.log(pathTemp);
//     minPathArr.push(pathTemp);
//     console.log("minPathArr 如下 ");
//     console.log(minPathArr);
//   }
//   console.log("最终minPathArr  ");
//   console.log(minPathArr);
//   // console.log(this.polylinePos);
//   // console.log(window.AMap.GeometryUtil);
// }, 1500);
// var c = 123;
// var d = null;
// console.log(c < d);
// var arr = [1];
// var child = arr.filter((item) => {
//   console.log(item);
//   return true;
// });
// console.log(child);
// var a = { a: 1, b: 2 };
// var b = { b: 3, c: 4 };

// var extend1 = function (o, n) {
//   for (var p in n) {
//     // if (n.hasOwnProperty(p) && !o.hasOwnProperty(p)) ;
//     o[p] = n[p];
//   }
// };
// var f = Object.assign(b, a);
// console.log(f);
var c = {
  create_time: "8月40日",
  goods_name: "爱雨刮器",
  goods_type: '爱多866A14"-26"',
  unit: "支",
  total_goods: 20,
  unit_price: " 25.00 ",
  total_price: " 500.00 ",
  customer: "车影汽车装饰",
  tel: 15716016128,
  add: "福建省三明市宁化县朝阳新村十路21-104",
  salesman: "梁成云",
};
var d = [
  {
    create_time: "8月29日",
    goods_name: "爱雨刮器",
    goods_type: '爱多866A14"-26"',
    unit: "支",
    total_goods: 20,
    unit_price: " 25.00 ",
    total_price: " 500.00 ",
    customer: "车影汽车装饰",
    tel: 15716016128,
    add: "福建省三明市宁化县朝阳新村十路21-104",
    salesman: "梁成云",
  },
  {
    create_time: "8月29日",
    goods_name: "爱雨刮器",
    goods_type: '爱多866A14"-26"',
    unit: "支",
    total_goods: 20,
    unit_price: " 25.00 ",
    total_price: " 500.00 ",
    customer: "宝城汽车服务中心",
    tel: 18759707672,
    add: "福建省三明市宁化县307省道",
    salesman: "梁成云",
  },
];
d.some((item, index) => {
  if (item.customer == c.customer) {
    d[index] = c;
  }
});
console.log(d);
