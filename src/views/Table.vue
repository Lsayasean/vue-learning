<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row  class="pa-16">
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="4"
            md="4"
            lg="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
              :elevation="hover ? 16 : 2" 
              :class="{ 'on-hover': hover }"
              >
                <v-card-title class="subheading font-weight-bold justify-space-between " >
                  {{ item.name }}
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Edit
                </v-btn>
                  <div class="red--text" @click="deleteOneItem( item.id )"> X </div>
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item>
                    <v-list-item-content>Calories:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.calories }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Fat:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.fat }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Carbs:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.carbs }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Protein:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.protein }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Sodium:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.sodium }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Calcium:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.calcium }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Iron:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.iron }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        items: 'getAllCalories'
      })
    },
    methods: {
    ...mapActions({ deleteOneItem: "deleteOneItem"})
    }
  }
</script>