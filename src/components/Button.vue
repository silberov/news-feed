<template>
  <button class="btn" @click="onClick" :style="{ background: color }">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log(this.$store.state.isFormActive);
      this.$store.dispatch("toggleForm", this.$store.state);
      // this.$store.commit('increment')
      // console.log(this.$store.state.news[2].title)
    },
  },
};
</script>
<style>
.btn {
  padding: 10px 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 800;
  border-radius: 3px;
  color: #fff;
  border: none;
}
.btn:hover {
  background-color: #ccc;
  cursor: pointer;
}
</style>
