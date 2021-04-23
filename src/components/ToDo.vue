<template>
  <div class="d-flex flex-column mt-5">
    <v-card
      class="mx-auto mt-5"
      color="#26c6da"
      dark
      width="400"
    >
      <v-card-title >
        <span class="title font-weight-bold mx-auto " >{{ current ? current.author : "N/A" }}</span>
      </v-card-title>
  
      <v-card-text class="headline font-weight-bold text-center" >
        {{ current ? current.desc : "N/A" }}
      </v-card-text>
    </v-card>

    <v-btn
      width="200"
      class="mx-auto mt-5 add-btn"
      @click="addRandomQuote"
    >
      Add Random Quote
    </v-btn>
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
      current: "getCurrentCard"
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