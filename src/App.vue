<template>
  <div id="app">
    <div class="container-fluid min-vh-100 d-flex flex-column">
      <div class="row">
        <div class="col p-0">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <router-link class="navbar-brand" to="/"
                >Excuses de dev</router-link
              >
              |
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/excuses" class="nav-link"
                      >Liste des excuses</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Nouvelle excuse</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="row flex-grow-1">
        <div class="col-md-12 border">
          <router-view />
        </div>
      </div>
    </div>

    <AjoutExcuseModal />
  </div>
</template>

<script>
import AjoutExcuseModal from "./components/AjoutExcuseModal.vue";
export default { components: { AjoutExcuseModal } };
</script>

<style></style>
