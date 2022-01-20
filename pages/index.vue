<template>
  <v-row class="px-2" align="center">
    <v-col justify="center" cols="12">
      <SearchEntidadeComponent placeholder="ex. Nome, Cnpj..." />
      <DataTableEntidadeComponent :headers="headers" :items="entidades" />
    </v-col>
  </v-row>
</template>

<script>
import { entidadeStore } from '~/store'
export default {
  name: 'IndexPage',
  data: () => ({
    headers: [
      {
        text: 'Entidade ID',
        sortable: true,
        value: 'entidadeId',
        width: '120px',
      },
      { text: 'Nome', value: 'ente.nome' },
      { text: 'Poder', value: 'poder.nome' },
      { text: 'Esfera', value: 'esfera.nome' },
      { text: 'Cadastrado em:', value: 'dataCadastro' },
    ],
  }),
  computed: {
    entidades() {
      return entidadeStore.entidadesState
    },
  },
}
</script>
