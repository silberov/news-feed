<template>
  <div>
    <input />
    <select name="searchBy" id="searchBy">
      <option value="1">Title</option>
      <option value="2">Body</option>
      <option value="3">Author</option>
    </select>
    <button class="btn">Search</button>
  </div>
</template>
<script>
export default {
  components: {},
  name: "SearchBar",
  componenets: {},
};
</script>
<style scoped>
div {
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
