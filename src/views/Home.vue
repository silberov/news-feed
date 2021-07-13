<template>
  <div class="home">
    <NewsContainer />
  </div>
</template>

<script>
// @ is an alias to /src

import NewsContainer from "@/components/NewsContainer";

export default {
  name: "Home",
  components: {
    NewsContainer,
  },
};
</script>
