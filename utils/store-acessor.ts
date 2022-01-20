import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import entidade from '~/store/entidade'

let entidadeStore: entidade

function initialiseStores(store: Store<any>): void {
    entidadeStore = getModule(entidade, store)
}

export { initialiseStores, entidadeStore }