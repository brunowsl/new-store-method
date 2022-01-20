<template>
  <v-row class="pt-8">
    <v-col cols="10">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        :placeholder="placeholder"
        v-model="filtro"
        outlined
        clearable
      ></v-text-field>
    </v-col>
    <v-col>
      <v-btn dark x-large color="primary" @click="buscar"> BUSCAR </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { entidadeStore } from '~/store'
export default {
  data: () => ({
    filtro: null,
  }),
  methods: {
    buscar() {
      console.log('-----BUSCANDO ENTIDADES')
      console.log(this.filtro)
      console.log(entidadeStore)
      entidadeStore.retornaNome()
    },
  },
  props: ['placeholder'],
}
</script>

<style></style>
