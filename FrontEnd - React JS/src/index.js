import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from "./layouts/header.js"
import Footer from "./layouts/footer.js"
import ListContacts from "./contacts/list.js"
import CreateContacts from "./contacts/create.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bulma/css/bulma.css'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">

            {/* ulr router goes here */}
            <Switch>
              <Route path="/" exact component={ListContacts} />
              <Route path="/create-contact" exact component={CreateContacts} />
            </Switch> 
            {/* router ends*/}

          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
