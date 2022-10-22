import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import Home from './Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./stores/store";
import Products from './components/Products';
import Layout from './components/Layout';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Layout/>}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
