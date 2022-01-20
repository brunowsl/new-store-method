export type EntidadesState = {
    entidades?: EntidadeType[],
    entidade?: EntidadeType
}

export type EntidadeType = {
    entidadeId?: number
    ente?: EnteType
    poder?: PoderType
    esfera?: EsferaType
    dataCadastro?: string
}

export type EnteType = {
    enteId: number
    nome: string
}

export type PoderType = {
    poderId: number
    nome: string
}

export type EsferaType = {
    esferaId: number
    nome: string
}