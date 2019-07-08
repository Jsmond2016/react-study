import { createStore, compose, applyMiddleware  } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';


const sagaMiddleware = createSagaMiddleware(); // 创建中间件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware)); // 将中间件传进来

const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas);

export default store;