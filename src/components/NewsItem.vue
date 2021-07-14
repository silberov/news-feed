<template>
  <div class="newsItem">
    <h3>{{ title }}</h3>
    <p class="body">{{ body }}</p>
    <div class="actionContainer">
      <p class="author">{{ author }}</p>
      <button class="action" @click="onEdit">Edit >></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsItem",
  props: {
    id: Number,
    title: String,
    body: String,
    author: String,
  },
  methods: {
    onEdit() {
      //console.log(this.id, this.$store.state.editItemId);
      this.$store.dispatch("getEdit", this.id);
      console.log(this.id, this.$store.state.editItemId);
    },
  },
};
</script>
<style scoped>
h3 {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 20px 0 3px;
}
.author {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0 0 20px;
  color: rgb(92, 92, 92);
}
.body {
  font-size: 1rem;
  font-weight: 300;
  padding-bottom: 10px;
}
.newsItem {
  display: block;
  border-bottom: solid 1px #000;
}
.actionContainer {
  display: flex;
  justify-content: space-between;
}
.action {
  font-size: 0.85rem;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  color: rgb(121, 121, 121);
  background-color: transparent;
  border: none;
}
.action:hover {
  color: #000;
  text-decoration: underline;
}
</style>
