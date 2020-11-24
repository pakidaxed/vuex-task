<template>
  <div class="movie-review">
    <div class="movie-image">
      <img :src="movie.image" alt="">
    </div>
    <div class="movie-credentials">
      <h1>{{ movie.title }}</h1>
      <span class="movie-year">{{ movie.year }}</span>
      <span class="movie-rating">&#9733; {{ movie.rating }}</span>
      <h4>{{ movie.description }}</h4>
    </div>
  </div>
  <div class="movie-comments" v-if="movie.comments.length <= 0">
    <h1>No comments for this movie</h1>
    <p>Be the first to comment...</p>
    <MovieComments/>
  </div>
  <div class="movie-comments" v-else>
    <h3>Comments ({{ movie.comments.length }})</h3>
    <button @click="addComment = !addComment">Leave a comment</button>
    <MovieComments @close-commenting="addComment = false" v-if="addComment"
                   v-bind:class="{ addingComment: addComment }"/>
    <div class="comment" v-for="(comment, key) in movie.comments" :key="comment">
      <h3>{{ comment.name }}</h3>
      <p>{{ comment.comment }}</p>
      <span class="delete-comment" @click="delComment(key)">✖</span>
    </div>
  </div>
</template>

<script>
import MovieComments from "@/components/MovieComments";

export default {
  name: "MovieReview",
  components: {MovieComments},
  data() {
    return {
      addComment: false
    }
  },
  computed: {
    movie() {
      return this.$store.getters.currentMovie
    }
  },
  created() {
    this.$store.commit("setCurrentMovie", this.$route.params.id)
  },
  methods: {
    delComment(key) {
      this.$store.commit('deleteComment', key)
    }
  }
}
</script>

<style scoped>
img {
  width: 300px;
  object-fit: cover;
}

.comment {
  position: relative;
}

.comment p {
  padding: 10px;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.03);
}

.delete-comment {
  position: absolute;
  right: 0;
  top: 0;
  color: crimson;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}

.movie-review {
  display: flex;
  width: 80%;
  margin: 0 auto;
}

.movie-credentials {
  padding: 20px;
}

h1 {
  margin-bottom: 0;
}

h3 {
  margin-bottom: 0;
}

p {
  margin-top: 0;
}

.movie-year {
  display: block;
  margin-bottom: 20px;
}

.movie-rating {
  border-radius: 8px;
  background-color: goldenrod;
  font-size: 20px;
  color: white;
  width: auto;
  padding: 10px 15px;
  display: inline-block;
}

.movie-comments {
  width: 80%;
  margin: 40px auto 20px auto;
  position: relative;
}

button {
  position: absolute;
  right: 0;
  top: -50px;
}

.addingComment {
  margin-top: 20px;
}
</style>