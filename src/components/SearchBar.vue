<template>
  <div>
    <form action="">
      <input
        @change="onChange"
        v-model="serarchText"
        name="serarchText"
        type="text"
      />
      <select
        @change="onChange"
        v-model="searchBy"
        name="searchBy"
        id="searchBy"
      >
        <option value="title">Title</option>
        <option value="body">Body</option>
        <option value="author">Author</option>
      </select>
      <button class="btn">Search</button>
    </form>
    <!-- <p>{{ serarchText }}</p>
    <p>{{ searchBy }}</p> -->
  </div>
</template>
<script>
export default {
  components: {},
  name: "SearchBar",
  data() {
    return {
      serarchText: "",
      searchBy: "title",
    };
  },
  methods: {
    onChange() {
      // if (this.serarchText) {
      const search = {
        text: this.serarchText,
        by: this.searchBy,
      };
      console.log(search);
      this.$store.dispatch("getSearch", search);
      console.log("store", this.$store.state.search);

      // }
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.btn {
  background-color: #1f7a8c;
}
input {
  width: 100%;
  padding: 7px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
select {
  padding: 7px;
  width: 30%;
}
</style>
