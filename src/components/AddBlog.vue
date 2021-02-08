<template>
  <div id="add-blog">
    <div v-if="!submitted">
      <h2 class="newColor">Add a New Blog Post</h2>
      <form>
        <label for="title">Blog Title:</label>
        <input type="text" id="title" v-model.lazy.trim="blog.title" required />
        <label for="content">Blog Content:</label>
        <textarea
          id="content"
          v-model.lazy.trim="blog.content"
          required
        ></textarea>
        <div id="checkboxes">
          <label>Food</label>
          <input type="checkbox" value="Food" v-model="blog.categories" />
          <label>Travel</label>
          <input type="checkbox" value="Travel" v-model="blog.categories" />
          <label>Lifestyle</label>
          <input type="checkbox" value="Lifestyle" v-model="blog.categories" />
          <label>Otherwise</label>
          <input type="checkbox" value="Otherwise" v-model="blog.categories" />
        </div>
        <label>Author: </label>
        <select v-model="blog.author">
          <option v-for="(auth, i) in authors" :key="i">{{ auth }}</option>
        </select>
        <button @click.prevent="post">Add Blog</button>
      </form>
    </div>

    <div v-else>
      <h3>You're post has successfully added!</h3>
    </div>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>
        Blog title: <span class="newColor">{{ blog.title }}</span>
      </p>
      <p>Blog content:</p>
      <p class="newColor">{{ blog.content }}</p>
      <p v-show="blog.categories.length > 0">Blog Categories:</p>
      <ul>
        <li v-for="(cate, i) in blog.categories" :key="i" class="newColor">
          {{ cate }}
        </li>
      </ul>
      <p>
        Author: <span class="newColor">{{ blog.author }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  components: {},
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Di Jr", "The net ninja", "Guest"],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http
        .post(
          "https://miniblogr-default-rtdb.firebaseio.com/posts.json",
          this.blog
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#add-blog {
  margin: 1rem auto;
  max-width: 31.25rem;

  label {
    display: block;
    margin: 1rem 0 0.5rem;
  }

  input[type="text"],
  textarea {
    display: block;
    width: 100%;
  }
}

textarea {
  resize: vertical;
}

h3 {
  margin-top: 0.625rem;
}

#checkboxes {
  label {
    display: inline-block;
  }

  input {
    display: inline-block;
    margin-right: 0.625rem;
  }
}

#preview {
  padding: 0.625rem 1.25rem;
  border: 1px dotted #ccc;
  margin: 1.875rem 0;
}

.newColor {
  color: #e4682d;
  font-weight: normal;
}

button {
  cursor: pointer;
  display: block;
  padding: 0.75rem;
  margin: 0.75rem auto 0;
  border: 0;
  color: #fff;
  background-color: #2c3e50;
}
</style>
