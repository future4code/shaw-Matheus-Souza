export const goToHome = (navigate) => {
    navigate("/")
}
export const goToHomePages = (navigate,page) => {
    navigate(`/${page}`)
}
export const goToDetails = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}