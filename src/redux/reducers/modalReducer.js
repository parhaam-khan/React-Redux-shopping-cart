export const modalProductReducer = (state = {modalProduct: null},action) => {
switch(action.type){
    case 'MODAL-PRODUCT':
        return{modalProduct: action.payload}

        default:
    return state
}

}
