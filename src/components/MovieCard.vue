<template>
  <div class="movie-card" @click="$router.push('/movie/' + movie.id)">
    <span class="movie-rating">&#9733; {{ movie.rating }}</span>
    <img :src="movie.image" alt="">
    <div class="movie-info">
      <h2>{{ movie.title }}</h2>
      <span>{{ movie.year }}</span>
      <p>Comments({{ movie.comments.length }})</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object
  }
}
</script>

<style scoped>
h2 {
  padding: 0;
  margin: 0;
}

.movie-rating {
  position: absolute;
  top: 0;
  right: 0;
  color: #daa520;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px 15px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.movie-card {
  width: 350px;
  margin-bottom: 10px;
  position: relative;
  transition: box-shadow 1s;
  border-radius: 10px;
}

.movie-card:hover {
  cursor: pointer;
  transform: scale(1.02);
  box-shadow: 0 0 20px 1px rgba(255, 255, 255, 0.5);
  transition: box-shadow 1s, transform 1s;
}

.movie-card img {
  width: 350px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

}

.movie-info {
  padding: 10px;
}
</style>