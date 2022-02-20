export const OrderReducer = (state = {orderValue : []},action) => {
switch(action.type){
    case 'POST-ORDER':
        return{
            orderValue: action.payload
        }

        default:
            return state
}
}