<template>
  <div class="container">
    <h1>Liste des excuses</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">http_code</th>
          <th scope="col">tag</th>
          <th scope="col">message</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="excuse in excuses" :key="excuse.id">
          <th scope="row">{{ excuse.id }}</th>
          <td>{{ excuse.http_code }}</td>
          <td>{{ excuse.tag }}</td>
          <td>{{ excuse.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store";
import Vuex from "vuex";

export default {
  name: "NewExcuseView",
  store: store,
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapGetters(["excuses"]),
  },
  mounted() {
    store.dispatch("setExcuses");
  },
};
</script>

<style></style>
