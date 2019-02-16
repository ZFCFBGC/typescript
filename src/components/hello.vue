<template>
  <div>
    <div class="greeting">Hello {{name}}{{enthusiasm}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["name", "initalEnthusiasm"],
  data() {
    return {
      enthusiasm: this.initalEnthusiasm
    };
  },
  methods: {
    increment() {
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    }
  }
});
</script>
<style scoped>
.greeting {
  font-size: 20px;
}
</style>
