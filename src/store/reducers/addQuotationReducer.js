import { SHOW_MODAL } from '../actions/actionsTypes';


const initialState = {
    showModal: false
}


export const addQuotationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: action.newValue
            }
        default:
            return state;
    }
}