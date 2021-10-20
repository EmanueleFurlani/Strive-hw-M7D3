export const addToFav= (company) => ({
    type: "ADD_TO_FAVORITE",
    payload: company
})

export const removeFromFav = (company) => ({
    type: "REMOVE_FROM_FAVORITE",
    payload: company
})