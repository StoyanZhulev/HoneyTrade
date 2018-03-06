import { AppState, InitialApptate } from "../../state/app-state";
import * as productActions from '../../actions/product.actions'
import { ProductState, InitialProductState } from "../../state/product-state";

export function productReducer(state: ProductState = InitialProductState, action: productActions.Actions): ProductState {
    switch (action.type) {
        case productActions.ProductActions.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload }
        case productActions.ProductActions.GET_PRODUCTS_FAIL:
            return state
        case productActions.ProductActions.CREATE_PRODUCT_SUCCESS:
            return { ...state, products: action.payload }
        case productActions.ProductActions.CREATE_PRODUCT_FAIL:
            // let errMsg = action.payload.message;
            // let newErrors = state.errors;
            // newErrors.push(errMsg);
            return state
        default:
            return state;
    }
}