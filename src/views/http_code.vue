<template>
  <div class="row h-100">
    <div class="col-md-12 d-flex justify-content-center align-items-center">
      <div class="alert alert-danger" role="alert">
        <p class="text-center"><b>Http Code:</b> {{ excuse.http_code }}</p>
        <p class="text-center"><b>Message :</b>{{ excuse.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  store: store,
  mounted() {
    if (this.$route.query.http_code) {
      store.dispatch("setExcuses");
    } else {
      this.$router.push("/");
    }
  },
  computed: {
    excuse() {
      return store.getters.excuseByHttpCode(this.$route.query.http_code);
    },
  },
};
</script>

<style></style>
