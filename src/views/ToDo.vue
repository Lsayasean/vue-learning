<template>
  <div class="d-flex flex-column mt-5">
    <v-btn
      width="200"
      class="mx-auto mt-5 add-btn"
      @click="addRandomQuote"
    >
      Add Random Quote
    </v-btn>

    <v-card 
      v-for="(quote, ndx) in allQuotes"
      class="mx-auto mt-5"
      color="#26c6da"
      dark
      width="400"
      :key="ndx"
    >
      <v-card-title >
        <span class="title font-weight-bold mx-auto " >{{ quote.author }}</span>
      </v-card-title>
  
      <v-card-text class="headline font-weight-bold text-center" > {{ quote.desc }} </v-card-text>
    </v-card>

	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ToDo",
  methods: {
    ...mapActions({ addRandomQuote: "setCurrentJoke"})
  },
  computed: {
    ...mapGetters({
      allQuotes: 'getAllQuotes'
    })
  }
}
</script>

<style scoped>
.card-bg {
  background-color: #8ec3eb;
}
.v-card__text {
  color: whitesmoke !important;
}
.add-btn{
  color: black !important;
  background-color: #8ec3eb !important;
}
</style>