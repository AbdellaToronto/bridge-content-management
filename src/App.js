import React, { Component } from 'react';
import 'rxjs';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import ReduxToastr from 'react-redux-toastr'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// routes
import routes from './routes';

// common components
import Header from './common/components/Header'
import Footer from './common/components/Footer'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header />
            <div className="wrap">
              {routes}
            </div>
            <Footer />
            <ReduxToastr
              timeOut={3000}
              newestOnTop={false}
              position="top-right"
              transitionIn="fadeIn"
              transitionOut="fadeOut"/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
