import React from 'react';
import { GlobalStyle } from './statics/icon-font/iconfont.js';
import Header from './common/header';

function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
       <header className="App-header">  
        <Header />
      </header>
    </div>
  );
}

export default App;
