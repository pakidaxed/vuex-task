<template>
  <div class="comments">
    <label>
      <input type="text" v-model="comment.name" placeholder="Your name">
    </label>
    <label>
      <textarea rows="3" v-model="comment.comment" placeholder="Your comment..."></textarea>
    </label>
    <button @click="addComment">Comment</button>
    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "MovieComments",
  data() {
    return {
      comment: {
        "name": null,
        "comment": null
      },
      errorMessage: null
    }
  },
  methods: {
    addComment() {
      if (Object.values(this.comment).includes(null)) {
        this.errorMessage = 'All fields must be completed'
      } else {
        this.$store.commit('addNewComment', this.comment)
        this.comment = {}
        this.errorMessage = null
        this.$emit('close-commenting')
      }
    }
  }
}
</script>

<style scoped>
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