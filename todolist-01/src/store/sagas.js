import {takeEvery,put} from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios';

function* getInitList(){
   //书写异步的逻辑
    try {
        const res = yield axios.get('api/todolist.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (error) {
        alert('todolist.json 网络请求失败!');
    }
}

// generator 函数
function* mySaga(){
    yield takeEvery(GET_INIT_LIST, getInitList); 
    // 只要接收到GET_INIT_LIST类型，就会执行 getInitList方法
}

export default mySaga; 