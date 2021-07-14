<template>
  <form @submit="onSubmit">
    <label for="author"
      >Name<br />
      <input
        type="text"
        v-model="author"
        id="author"
        name="author"
        placeholder="Jane Doe" /></label
    ><br />
    <label for="title"
      >Title<br />
      <input
        type="text"
        v-model="title"
        id="title"
        name="title"
        placeholder="your title" /></label
    ><br />

    <label for="body"
      >Text<br />
      <textarea
        v-model="body"
        type="text"
        id="body"
        name="body"
        placeholder="your text here ..."
      /></label
    ><br />
    <input class="submit" type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  name: "Form",
  props: {
    initId: {
      type: Number,
      default: null,
    },
    initTitle: {
      type: String,
      default: "",
    },
    initBody: { type: String, default: "" },
    initAuthor: { type: String, default: "" },
  },

  data() {
    return {
      id: this.initId,
      title: this.initTitle,
      body: this.initBody,
      author: this.initAuthor,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.body || !this.author || !this.title) {
        alert("please fill the form");
        return;
      }

      const newItem = {
        title: this.title,
        body: this.body,
        author: this.author,
        id: this.id ? this.id : this.$store.state.news.length + 1,
      };

      console.log("newItem", newItem);
      if (!this.id) {
        this.$store.dispatch("addNews", newItem);
      } else this.$store.dispatch("updateNews", newItem);
      this.$store.dispatch("toggleForm");
      this.title = "";
      this.body = "";
      this.author = "";
    },
  },
};
</script>
<style scoped>
form {
  text-align: left;
}
label {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  padding-bottom: 3px;
}
input,
textarea {
  width: 97%;
  padding: 7px;
  margin-bottom: 7px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
textarea {
  height: 2.5rem;
}
.submit {
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #212529;
  border-radius: 3px;
  border: solid 3px #212529;
}
.submit:hover {
  background-color: #1f7a8c;
  border: solid 3px #1f7a8c;
}
</style>
