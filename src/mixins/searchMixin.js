export default {
  computed: {
    filterBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
