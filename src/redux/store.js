import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addressFormCartReducer, cartReducer, emailFormCartReducer, nameFormCartReducer, showFormReducer } from "./reducers/cartReducer";
import { OrderReducer } from "./reducers/createOrderReducer";
import { modalProductReducer } from "./reducers/modalReducer";
import { getProductsreducer } from "./reducers/productReducer";

const reducer = combineReducers({
    getProducts: getProductsreducer,
    cart: cartReducer,
    showFormCart: showFormReducer,
    emailFormCart: emailFormCartReducer,
    nameFormCart: nameFormCartReducer,
    addressFormCart: addressFormCartReducer,
    modalProducts: modalProductReducer,
    order: OrderReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart : {cartItems : cartItemsFromLocalStorage}
}

const middleWare = [thunk]

const store = createStore(reducer,initialState,
    compose(applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))

export default store;