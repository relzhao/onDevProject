<template>
  <div class="about" id="about">
    <h1>This is an about page</h1>
    <copdem study="Vue component" msg="好使！"></copdem>
  </div>
</template>

<script>
import copdem from "../components/CopDem";
export default {
  app: "about",
  components: {
    copdem,
  },
};
</script>
