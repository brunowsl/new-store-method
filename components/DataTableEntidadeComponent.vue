<template>
  <v-row class="px-4 d-block">
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="7"
      class="elevation-1"
      @click:row="handleClick"
    ></v-data-table>
  </v-row>
</template>

<script lang="ts">
import { entidadeStore } from '~/store'
import { EntidadeType } from '~/types'
export default {
  props: ['items', 'headers'],
  data: () => ({}),
  methods: {
    handleClick(value: EntidadeType) {
      entidadeStore.updateEntidade
      console.log(value.entidadeId)
      this.$router.push('/entidades/' + value.entidadeId)
    },
  },
}
</script>

<style></style>
