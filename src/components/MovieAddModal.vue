<template>
  <div class="modal">
    <h1>ADD NEW MOVIE</h1>
    <label>
      Movie title:
      <input v-model="newMovie.title" type="text">
    </label>
    <label>
      Movie year:
      <input v-model="newMovie.year" type="number" min="1900" max="2021">
    </label>
    <label>Movie rating:
      <input v-model="newMovie.rating" type="number" step=".1" min="0" max="10">
    </label>
    <label>Movie image:
      <input v-model="newMovie.image" type="text">
    </label>
    <label>
      Movie description
      <textarea v-model="newMovie.description" placeholder="Description..." rows="4"></textarea>
    </label>
    <button @click="addMovie()">SAVE</button>
    <button @click="closeModal">CLOSE</button>
    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "MovieAddModal",
  data() {
    return {
      newMovie: {
        "image": null,
        "title": null,
        "id": 0,
        "year": null,
        "rating": null,
        "description": null,
        "comments": []
      },
      errorMessage: null
    }
  },
  methods: {
    addMovie() {
      if (Object.values(this.newMovie).includes(null)) {
        this.errorMessage = 'All fields must be completed'
      } else {
        this.getLastMovieId()
        this.$store.commit('addNewMovie', this.newMovie)
        this.newMovie = {}
        this.closeModal()
      }
    },
    getLastMovieId() {
      this.$store.getters.movies.filter(x => {
        if (x.id > this.newMovie.id) {
          this.newMovie.id = x.id++
          this.newMovie.id = this.newMovie.id.toString()
        }
      })
    },
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
.modal {
  width: 600px;
  height: auto;
  background-color: black;
  border: 2px solid #42b983;
  position: absolute;
  top: calc(100% / 2 - 200px);
  left: calc(100% / 2 - 300px);
  z-index: 1000;
  padding: 15px;
  color: #42b983;
}

h1 {
  margin-top: 0;
}

button {
  margin-right: 10px;
}

input, textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #42b983;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  margin-bottom: 10px;
}

.error {
  padding-left: 15px;
  color: crimson;
}
</style>