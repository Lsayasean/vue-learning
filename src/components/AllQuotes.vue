<template>
  <div>
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
import { mapGetters } from "vuex";
export default {
  name: 'AllQuotes',
  computed: {
    ...mapGetters({
      allQuotes: 'getAllQuotes'
    })
  }
}
</script>

<style scoped>

</style>