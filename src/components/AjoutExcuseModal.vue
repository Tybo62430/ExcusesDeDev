<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ajout d'excuse</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="addExcuse">
          <div class="modal-body">
            <div class="form-group">
              <label>http_code</label>
              <input
                type="text"
                class="form-control"
                v-model="newExcuse.http_code"
                required
              />
            </div>
            <div class="form-group">
              <label>tag</label>
              <input
                type="text"
                class="form-control"
                v-model="newExcuse.tag"
                required
              />
            </div>
            <div class="form-group">
              <label>message</label>
              <input
                type="text"
                class="form-control"
                v-model="newExcuse.message"
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Annuler
            </button>
            <button type="submit" class="btn btn-primary">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import { Modal } from "bootstrap";

export default {
  name: "NewExcuseView",
  data() {
    return {
      modal: null,
      newExcuse: {
        http_code: "",
        tag: "",
        message: "",
      },
    };
  },
  mounted() {
    const myModalEl = document.getElementById("exampleModal");
    this.modal = new Modal(document.getElementById("exampleModal"));
    myModalEl.addEventListener("hidden.bs.modal", () => {
      this.clearFields();
    });
  },
  methods: {
    ...Vuex.mapActions({
      addExcuseStore: "addExcuse",
    }),

    addExcuse(e) {
      this.addExcuseStore(this.newExcuse);
      this.modal.hide();
      e.preventDefault();
    },
    clearFields() {
      this.newExcuse.http_code = "";
      this.newExcuse.tag = "";
      this.newExcuse.message = "";
    },
  },
};
</script>

<style></style>
