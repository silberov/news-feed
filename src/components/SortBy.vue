<template>
  <div class="byOpt">
    <span>Sort by: </span>
    <div>
      <input
        @click="onChange"
        type="radio"
        id="title"
        name="sort"
        value="title"
        checked
      />
      <label for="title">Title</label>
    </div>
    <div>
      <input
        @click="onChange"
        type="radio"
        id="body"
        name="sort"
        value="body"
      />
      <label for="body">Text</label>
    </div>
    <div>
      <input
        @click="onChange"
        type="radio"
        id="author"
        name="sort"
        value="author"
      />
      <label for="author">Author</label>
    </div>
    <div @click="onChecked">
      <input type="checkbox" :checked="isDescChecked && checked" />
      <label for="desc">DESC</label>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SortBy",
  computed: mapGetters(["isDescChecked"]),
  methods: {
    onChange(e) {
      //console.log(e.target.value);
      this.$store.dispatch("ChangeSortBy", e.target.value);
    },
    onChecked(e) {
      console.log(e.target.checked);
      this.$store.dispatch("toggleOrder");
    },
  },
};
</script>
<style scoped>
.byOpt {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}
label {
  padding-left: 5px;
}
</style>
