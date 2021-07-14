<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/nice">Nice</router-link> |
    <router-link to="/best">Best</router-link>
  </div>
  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #222222;
  text-decoration: none;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #1f7a8c;
}
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
