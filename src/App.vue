<template>
  <div id="nav">
    <router-link v-if="$route.params.id" to="/">BACK TO MOVIE LIST</router-link>
    <button v-else @click="addMovieModal = !addMovieModal">ADD MOVIE</button>
    <MovieAddModal v-if="addMovieModal" @close-modal="addMovieModal = false"/>
  </div>
  <router-view/>
  <!--  // Movie gallery application-->
  <!--  // you are given movie list-->
  <!--  // first page of application should be movie gallery with movie cards-->
  <!--  // each cart should have: title, year, rating, comments length, and cover image-->
  <!--  // clicking on the card should redirect you to other page with information about particular movie-->
  <!--  // in movie information page this info is displayed: title, year, rating, description, image and comments-->
  <!--  // also in movie details page you should be able to add new comment and delete any comment-->
  <!--  // (remember to validate comment inputs, so user could not add empty text as comment)-->
  <!--  // also create modal to add new movie if needed-->
  <!--  // make sure to use these methods at least once:-->
  <!--  // class binding, style binding, v-for, v-if, at least one lifecycle hook-->
  <!--  // CREATIVE TASK:-->
  <!--  // think of some new cool feature in your application, so you could use "watch" method in it-->
</template>
<script>
import MovieAddModal from "@/components/MovieAddModal";

export default {
  name: 'App',
  components: {
    MovieAddModal
  },
  data() {
    return {
      addMovieModal: false
    }
  },
}
</script>
<style>
body {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #435d76;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  padding: 15px 25px;
  border: 2px solid #42b983;
  color: #42b983;
  background-color: black;
  font-size: 14px;
  cursor: pointer;
}
</style>
