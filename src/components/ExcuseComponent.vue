<template>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Excuses de Dev</h5>
      <transition name="fade" appear v-if="visible">
        <div>
          <p class="card-text">
            {{ excuse }}
          </p>
          <ExuseButton @getExcuse="getExcuse($event)"></ExuseButton>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ExuseButton from "./ExcuseButton.vue";
export default {
  name: "ExcuseComponent",
  data() {
    return {
      excuse: "Trouvez votre nouvelle Excuse !",
      visible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 2000);
  },
  components: { ExuseButton },
  methods: {
    getExcuse(excuse) {
      this.excuse = excuse;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s, transform 2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>
