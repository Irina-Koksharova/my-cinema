import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import 'index.css';
import { SizeProvider } from 'context/size/SizeContextProvider';
import App from 'components/App';

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <SizeProvider>
        <App />
      </SizeProvider>
    </BrowserRouter>
  // </React.StrictMode >
  ,
  document.getElementById('root'),
);

