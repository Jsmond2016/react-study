import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes';


const defaultState = {
    inputValue: 'redux test info',
    list: ['hello', 'world']
};


// reducer 可以接收 state ，但是绝不能修改 state
export default (state =defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.inputValue = action.value;
        return newState; //该数据返回给到 store 了
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;  //该数据返回给到 store 了
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.list.splice(action.index, 1);
        return newState;  //该数据返回给到 store 了
    }
     if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.list = action.data;
        return newState; 
    }
    return state;
}