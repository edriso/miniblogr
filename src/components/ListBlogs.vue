<template>
  <div id="list-blogs" v-theme:column="'narrow'">
    <h1>Blog Titles Only</h1>
    <input type="text" v-model="search" placeholder="Search title" />
    <div class="single-blog" v-for="(blog, index) in filterBlogs" :key="index">
      <h3 v-randomColors>{{ blog.title | textUppercase }}</h3>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin.js";

export default {
  name: "ListBlogs",
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("https://miniblogr-default-rtdb.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  filters: {
    textUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + "...";
    },
  },
  directives: {
    // local directives
    randomColors: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      },
    },
  },
  mixins: [searchMixin],
};
</script>

<style scoped>
#list-blogs {
  max-width: 50rem;
  margin: 0 auto;
}

#list-blogs .single-blog {
  padding: 1.25rem;
  margin: 1.25rem 0;
  box-sizing: border-box;
  background-color: #eee;
}
</style>
