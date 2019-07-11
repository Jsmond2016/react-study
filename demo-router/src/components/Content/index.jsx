import React from 'react';


const Content = ({match}) =>{
    return (
    <div>
      <h2>match.url：{match.url}</h2>
      <h2>match.params.id：{match.params.id}</h2>
      <h2>match.path：{match.path}</h2>
    </div>
    );
  }

  export default Content;