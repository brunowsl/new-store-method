import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { $axios } from "~/utils/axios-acessor";
import { EntidadesState, EntidadeType } from '~/types'

@Module({
    name: 'entidades',
    stateFactory: true,
    namespaced: true,
})
export default class EntidadeModule extends VuexModule {
    entidades: EntidadeType[] = []
    entidade: EntidadeType = {}

    @Mutation
    addEntidades(entidades: EntidadeType[]) {
        this.entidades = entidades
    }

    @Mutation
    updateEntidade(entidade: EntidadeType) {
        this.entidade = entidade
    }
    
    @Mutation
    retornaNome() {
        console.log('MEU NOME ARROMBADO!')
    }

    @Action
    async fetchEntidades(filtro: string) {
        console.log('chamei a store')
        await $axios.request<EntidadeType>({
            url: 'http://localhost:8081/siger/entidade/find' + filtro,
            transformResponse: (r: EntidadesState) => r.entidades
        }).then((response) => {
            const { data } = response
            this.context.commit('addEntidades', data)
        })
    }

    get entidadesState() {
        console.log('get chamado')
        return this.entidades
    }
}