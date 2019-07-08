import {DELE_ITEM,CHANGE_INPUT_VALUE,ADD_ITEM} from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getDeleteItemAction= (index) => ({
    type: DELE_ITEM,
    index
})

export const getAddItemAction = () => ({
    type: ADD_ITEM
})