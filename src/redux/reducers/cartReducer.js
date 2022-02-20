export const cartReducer = (state = {cartItems: []}, action) => {
switch(action.type){
    case 'CART-ADD':
        const product = action.payload

        const existProduct = state.cartItems.find((item) => item._id === product._id )

if(existProduct){

    const existItem = state.cartItems.map((item) => 
    item._id === product._id ? {...existProduct, quantity: existProduct.quantity + 1 } : item)
    return{
        cartItems:  existItem 
    }

} else{
    const newItem = [...state.cartItems, {...product, quantity: 1}]
    return{
     cartItems:  newItem
    }
}

case 'CART-REMOVE':
    return{
        cartItems: action.payload
    }

    case 'CLEAR-CART':
        return{cartItems: []}

        default:
            return state
}
}

export const showFormReducer = (state = {showForm: false},action) => {
    switch(action.type){
    
        case 'SHOW-FORM-CART':
            return{
                showForm: action.payload
            }
           default: 
           return state
    
    }
    }

    export const emailFormCartReducer = (state = {email : ""},action) => {
switch(action.type){
    case 'FORM-CART-EMAIL': 
    return{ email : action.payload}

    default:
        return state
}
    }

    export const nameFormCartReducer = (state = {name : ""},action) => {
        switch(action.type){
            case 'FORM-CART-NAME': 
            return{ name : action.payload}
        
            default:
                return state
        }
            }

 export const addressFormCartReducer = (state = {address : ""},action) => {
         switch(action.type){
                case 'FORM-CART-ADDRESS': 
                    return{ address : action.payload}
                
                    default:
                        return state 
                }
                    }        