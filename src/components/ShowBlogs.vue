<template>
  <div id="show-blogs" v-theme="'narrow'">
    <h1><router-link to="/list" exact>Show Blog Titles</router-link></h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div class="single-blog" v-for="(blog, index) in filterBlogs" :key="index">
      <router-link :to="'/blog/' + blog.id">
        <h3>{{ blog.title }}</h3>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
// import searchMixin from "../mixins/searchMixin";

export default {
  name: "ShowBlogs",
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
  // mixins: [searchMixin],
  computed: {
    // for searching blogs -- this is the same as searchMixin, but mixins like sass for using in many places
    filterBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  filters: {
    // local filter
    snippet(value) {
      return value.slice(0, 100) + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
#show-blogs {
  max-width: 50rem;
  margin: 0 auto;

  .single-blog {
    padding: 1.25rem;
    margin: 1.25rem 0;
    box-sizing: border-box;
    background-color: #eee;
  }

  a,
  a:focus,
  a:visited {
    text-decoration: none;
    color: #1b90fd;
  }

  h1 a,
  h1 a:focus,
  h1 a:visited {
    color: #2c3e50;
  }
}
</style>
