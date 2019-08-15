import { SHOW_MODAL } from './actionsTypes';

export const toggleShowModal = value => ({
    type: SHOW_MODAL,
    newValue: value
})