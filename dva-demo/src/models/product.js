import * as api from '../services/example'

export default {
    namespace: 'product',
    state: {
        productList: [
            {
                name: '豆子'
            },
            {
                name: '玉米'
            }
        ]
    },
    reducers: {
        updateList(state, action){
            let currentProductList = deepClone(state);
            currentProductList.productList.push(action.payload)
            return currentProductList;
        } 
    },
    effects: {
        *updateListAsync({ payload }, { call, put }) {  // eslint-disable-line
          yield put({ 
              type: 'updateList',
              payload
            });
        },
        *updateListHttp({payload}, {call, put}){ // 说明 payload 是调用该方法传递的参数，有则填，没有可不传
            // 网络请求
            const result = yield call(api.getProduct, payload);
            console.log(result)
            const data = result.data;
            if(data) {
                yield put({
                    type: 'updateList',
                    payload: data
                })
            }
            console.log("1111111")
        }  
      },
    subscriptions:{
        setup({dispatch, history}){ // setup 名字可以任意，都可以拿到 dispatch 和 history
            // const currentProduct={
            //     name: "玉米1"
            // }
            // window.onresize = () => {  // 对 dispatch 的使用   
            //     dispatch({
            //         type: "updateList",
            //         payload: currentProduct
            //     })
            // }
        },
        setUpHistory({dispatch, history}) {
            history.listen((location) => {
                console.log(location) // pathname: "/product"
            })
        }
    }
}

function deepClone(arr) {
    let _obj = JSON.stringify(arr);
    let objClone = JSON.parse(_obj);
    return objClone;
}