export const getProductsreducer = (state ={ products : []}, action) => {

    switch(action.type){
    case 'GET-PRODUCTS':
            return { loading: true, products: [] }
            
    case 'GET-PRODUCT-SUCCESS':
return { loading: false, products: action.payload }

    case 'SIZE-FILTER':
    return { products: action.payload }

     case 'SIZE-ALL':
        return {products: action.payload}

     case 'LATEST-PRODUCT':
            return{products: action.payload}

     case 'HIGHEST-PRICE':
                return{products: action.payload}

      case 'LOWEST-PRICE':
                    return{products: action.payload}

default :
return state
    }
}