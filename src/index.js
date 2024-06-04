import React from 'react';
import {Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Pictures from './components/Pictures';
import ComingSoon from './Pages/ComingSoon';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
