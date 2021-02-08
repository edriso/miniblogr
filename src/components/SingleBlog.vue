<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <p>Author: {{ blog.author }}</p>
    <ul class="Category">
      Category:
      <li v-for="(cat, index) in blog.categories" :key="index">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get(
        "https://miniblogr-default-rtdb.firebaseio.com/posts/" +
          this.id +
          ".json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  },
};
</script>

<style lang="scss" scoped>
#single-blog {
  max-width: 60rem;
  margin: 0 auto;

  li {
    display: inline-block;

    &:not(:first-child)::before {
      content: ", ";
    }
  }
}
</style>
