<template>
  <div class="row h-100">
    <div class="col-md-12 d-flex justify-content-center align-items-center">
      <ExcuseComponent></ExcuseComponent>
    </div>
  </div>
</template>

<script>
import ExcuseComponent from "@/components/ExcuseComponent.vue";
export default {
  name: "HomeView",
  components: { ExcuseComponent },
};
</script>
