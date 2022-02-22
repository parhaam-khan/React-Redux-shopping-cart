export const OrderReducer = (state = {orderValue : []},action) => {
switch(action.type){

    case 'PRE-POST': 
    return{orderValue: [] , loadingPost: true }

    case 'POST-ORDER':
        return{
            orderValue: action.payload,
            loading: false
        }

        default:
            return state
}
}