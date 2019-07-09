import React from 'react';
import {Provider} from 'react-redux';
import { GlobalStyle } from './statics/icon-font/iconfont.js';
import Header from './common/header';
import store from './store';


function App() {
  return (
    <Provider className="App" store={store}>
      <GlobalStyle /> 
        <Header />
    </Provider>
  );
}

export default App;
