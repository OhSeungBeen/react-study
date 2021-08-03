import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Step03History from './Step03History';

const Step03 = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/history">history</Link>
        </li>
      </ul>
      <Route path="/history" component={Step03History} exact={true} />
      <hr />
    </>
  );
};

export default Step03;
