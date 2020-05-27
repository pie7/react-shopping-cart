import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import cart from './reducers/cart'
import product from './reducers/product'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  product,
  cart
})

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);