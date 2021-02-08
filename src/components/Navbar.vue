<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Blogs</router-link></li>
      <li><router-link to="/add" exact>Add Post</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: #2c3e50;
  padding: 0.875rem 0;
  margin-bottom: 1rem;
}

li {
  display: inline-block;
  margin: 0 0.625rem;
}

a {
  color: #bbb;
  text-decoration: none;
}

.router-link-active {
  color: #fff;
}
</style>
