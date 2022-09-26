<template>
  <div class="row h-100">
    <div class="col-md-12 d-flex justify-content-center align-items-center">
      <div class="card" style="width: 24rem">
        <img
          src="https://media0.giphy.com/media/5x89XRx3sBZFC/giphy.gif?cid=ecf05e47nk7c25evmwzy1i5zbhghn7ww3jlz15tufqrhmnsi&rid=giphy.gif&ct=g"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">I'm lost</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LostView",
  mounted() {
    setTimeout(() => {
      this.$router.push("/");
    }, "5000");
  },
};
</script>

<style></style>
