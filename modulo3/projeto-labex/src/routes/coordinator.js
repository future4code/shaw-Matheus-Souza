export const pagInicial = (navegar) => {
    navegar("/")
}
export const voltarPag = (navegar) => {
    navegar(-1)
}
export const pagGerenciar = (navegar,page) => {
    navegar(`/${page}`)
}
export const abreInscrição = (navegar,modal) => {
    navegar(`index/${modal}`)
}
export const abreViagem = (navegar,modal) => {
    navegar(`/gerenciar/${modal}`)
}