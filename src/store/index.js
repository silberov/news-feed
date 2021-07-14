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
    sortBy: "title",
    sortDesc: false,
  },
  getters: {
    isFormActive: (state) => state.isFormActive,

    allNews: (state) => state.news,

    newsItemEdit: (state) =>
      state.news.find((item) => item.id === state.editItemId),

    newsWithoutItem: (state) => {
      if (state.editItemId !== null) {
        return state.news.filter((item) => item.id !== state.editItemId);
      } else return state.news;
    },

    searchResults: (state, getters) => {
      if (state.search.text !== "") {
        return getters.newsWithoutItem.filter((item) => {
          if (item[state.search.by].includes(state.search.text)) {
            return item;
          }
        });
      } else return state.news;
    },
    sorted: (state, getters) => {
      function compareValues(key, order = "asc") {
        return function innerSort(a, b) {
          const varA =
            typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
          const varB =
            typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return order === "desc" ? comparison * -1 : comparison;
        };
      }
      return getters.searchResults.sort(
        compareValues(state.sortBy, state.sortDesc ? "desc" : "asc")
      );
    },
    isDescChecked: (state) => {
      state.sortDesc;
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
      const index = state.editItemId;
      console.log("index", index, "state", state.editItemId);

      // state.news.find((item) => item.id === state.editItemId).author =
      //   updatedItem.author;
      // state.news.find((item) => item.id === state.editItemId).title =
      //   updatedItem.title;
      // state.news.find((item) => item.id === state.editItemId).body =
      //   updatedItem.body;
      for (let i = 0; i < state.news.length; i++) {
        if (state.news[i].id === updatedItem.id) {
          state.news[i].author = updatedItem.author;
          state.news[i].title = updatedItem.title;
          state.news[i].body = updatedItem.body;
          return;
        }
      }
    },
    CLEAR_EDITED(state) {
      state.editItemId = null;
    },
    GET_EDITED(state, id) {
      console.log("get id", id);
      state.editItemId = id;
    },
    GET_SEARCH(state, searchData) {
      state.search.text = searchData.text;
      state.search.by = searchData.by;
    },
    CHANGE_SORT_BY(state, by) {
      state.sortBy = by;
    },
    TOGGLE_DESC(state) {
      state.sortDesc = !state.sortDesc;
    },
  },
  actions: {
    addNews({ commit }, newItem) {
      console.log("new", newItem);
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
    getEdit({ commit, state }, id) {
      commit("CLEAR_EDITED");
      commit("GET_EDITED", id);
      if (state.isFormActive) {
        commit("TOGGLE_FORM");
      }
      commit("TOGGLE_FORM");
    },
    getSearch({ commit }, searchData) {
      commit("GET_SEARCH", searchData);
    },
    ChangeSortBy({ commit }, by) {
      commit("CHANGE_SORT_BY", by);
    },
    toggleOrder({ commit }) {
      commit("TOGGLE_DESC");
    },
  },
  modules: {},
});
