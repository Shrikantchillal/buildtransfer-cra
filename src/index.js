import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Home from './components/home';
import ReplicationStatus from './components/replicationStatus';
import StorageUtiliation from './components/storageUtilization';
import Routes from './components/routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers/combineReducer';
import allServices from './services/all-services';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(allReducers, 
  applyMiddleware(thunk, 
    allServices
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="md">
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/replication" component={ReplicationStatus} />
          <Route path="/storage" component={StorageUtiliation} />
          <Route path="/routes" component={Routes} />
        </Router>
      </Provider>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
