import { createStore } from "vuex";

export default createStore({
  state: {
    news: [
      {
        author: "Leanne Graham",
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        author: "Ervin Howell",
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        author: "Clementine Bauch",
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      },
      {
        author: "Patricia Lebsack",
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      },
      {
        author: "Ervin Howell",
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      },
      {
        author: "Ervin Howell",
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      },
    ],
    isFormActive: false,
    editItemId: null,
    search: {
      text: "",
      by: null,
    },
  },
  getters: {
    allNews: (state) => state.news,
    newsItemEdit: (state) => state.news[state.editItemId - 1],
    newsWithoutItem: (state) => {
      if (state.editItemId) {
        return state.news.filter((item) => item.id !== state.editItemId);
      } else return state.news;
    },
    isFormActive: (state) => state.isFormActive,
    searchResults: (state) => {
      if (state.search.text !== "") {
        return state.news.filter((item) => {
          if (item[state.search.by].includes(state.search.text)) {
            return item;
          }
        });
      } else return state.news;
    },
  },
  mutations: {
    ADD_NEWS(state, newNews) {
      state.news.unshift(newNews);
    },
    TOGGLE_FORM(state) {
      state.isFormActive = !state.isFormActive;
    },
    UPDATE_NEWS(state, updatedItem) {
      console.log(state.editItemId);
      const index = state.editItemId - 1;
      console.log(state.editItemId);
      state.news[index].author = updatedItem.author;
      state.news[index].title = updatedItem.title;
      state.news[index].body = updatedItem.body;
    },
    CLEAR_EDITED(state) {
      state.editItemId = null;
    },
    GET_EDITED(state, id) {
      state.editItemId = id;
    },
    GET_SEARCH(state, searchData) {
      // console.log(searchData);
      state.search.text = searchData.text;
      state.search.by = searchData.by;
    },
  },
  actions: {
    addNews({ commit }, newItem) {
      commit("ADD_NEWS", newItem);
      commit("CLEAR_EDITED");
    },
    toggleForm({ commit }) {
      commit("TOGGLE_FORM");
      commit("CLEAR_EDITED");
    },
    updateNews({ commit }, updatedNews) {
      commit("UPDATE_NEWS", updatedNews);
      commit("CLEAR_EDITED");
    },
    getEdit({ commit }, id) {
      commit("CLEAR_EDITED");
      commit("TOGGLE_FORM");
      commit("GET_EDITED", id);
    },
    getSearch({ commit }, searchData) {
      commit("GET_SEARCH", searchData);
    },
  },
  modules: {},
});
