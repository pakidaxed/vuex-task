<template>
  <div class="movie-list">
    <MovieCard v-for="(movie, id) in movies" :movie="movie" :key="'movie-'+id" />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard";

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  computed: {
    movies()
    {
      return this.$store.getters.movies
    }
  }
}
</script>
<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
}
</style>
