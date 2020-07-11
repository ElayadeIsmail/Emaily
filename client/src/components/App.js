import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

import * as actions from "../redux/actions";

import { connect } from "react-redux";
import Landing from "./Landing";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <div className='container'>
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' render={() => <h1>surveys</h1>} />
        </div>
      </Router>
    </div>
  );
};

export default connect(null, actions)(App);
