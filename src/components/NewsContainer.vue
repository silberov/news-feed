<template>
  <div class="warper">
    <header>
      <h2>News Feed</h2>

      <Button
        :text="isFormActive ? 'X' : '+ New'"
        :color="!isFormActive ? '#1f7a8c' : '#a4161a'"
      />
    </header>

    <Form
      v-if="newsItemEdit && isFormActive"
      :initTitle="newsItemEdit.title"
      :initBody="newsItemEdit.body"
      :initAuthor="newsItemEdit.author"
      :initId="newsItemEdit.id"
    />

    <Form v-if="isFormActive && !newsItemEdit" />

    <SearchBar v-if="!isFormActive" />

    <SortBy />

    <div class="newsContainer" v-for="news in sorted" :key="news.id">
      <NewsItem
        :title="news.title"
        :body="news.body"
        :author="news.author"
        :id="news.id"
      />
    </div>
  </div>
</template>
<script>
import NewsItem from "./NewsItem";
import Form from "./Form";
import Button from "./Button.vue";
import SearchBar from "./SearchBar.vue";
import SortBy from "./SortBy.vue";
import { mapGetters } from "vuex";

export default {
  name: "NewsContainer",
  computed: mapGetters([
    "allNews",
    "newsItemEdit",
    "newsWithoutItem",
    "isFormActive",
    "searchResults",
    "sorted",
  ]),

  components: {
    NewsItem,
    Button,
    Form,
    SearchBar,
    SortBy,
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.warper {
  max-width: 500px;
  padding: 20px;
  margin: auto;
}
h2 {
  font-size: 1.5rem;
  padding: 0 0 10px 0;
}
</style>
