<template>
  <div>
    <button class="btn btn-primary" type="button" disabled v-if="loading">
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
    <button class="btn btn-primary" @click="findEscuse" v-else>
      Cherchez une escuse
    </button>
  </div>
</template>

<script>
import store from "../store";
import Vuex from "vuex";

export default {
  name: "ExcuseButton",
  store: store,
  data() {
    return {
      excuse: null,
      loading: false,
    };
  },
  computed: {
    ...Vuex.mapGetters(["excuses"]),
  },
  mounted() {
    store.dispatch("setExcuses");
  },
  methods: {
    findEscuse() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        let newExcuse = this.getRandomExcuse();

        if (this.excuse === null) {
          this.excuse = newExcuse;
        } else {
          while (this.excuse === newExcuse) {
            newExcuse = this.getRandomExcuse();
          }
          this.excuse = newExcuse;
        }
        this.$emit("getExcuse", this.excuse.message);
      }, Math.floor(Math.random() * 5) * 1000);
    },
    getRandomExcuse() {
      let max = this.excuses.length;
      let random = Math.floor(Math.random() * max);
      return this.excuses[random];
    },
  },
};
</script>

<style></style>
