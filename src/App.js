import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import './App.scss';


const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppWrap>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </AppWrap>
  );
}
export default App;
