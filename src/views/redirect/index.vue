<!--
 * @Author: your name
 * @Date: 2021-05-28 15:37:31
 * @LastEditTime: 2021-06-01 14:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/views/redirect/index.vue
-->
<script>
export default {
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({ path: "/" + path, query });
  },
  render: function (h) {
    return h();
  },
};
</script>
