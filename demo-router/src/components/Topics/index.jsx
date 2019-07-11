import React from 'react';
import {Link,Route} from 'react-router-dom';
import Content from '../Content';

const Topics = ({ match }) => {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Content} />
        <Route exact path={match.path}/>
      </div>
    );
  }

  export default Topics;