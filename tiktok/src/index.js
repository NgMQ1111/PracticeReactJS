import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext'
import { StoreProvider } from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));

//* Fake Commments
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Nội dung comment của lesson ${id}`
//       })
//     )
//   }, 2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)

//! Example 1
// root.render(
//   // <React.StrictMode>
//     // <ThemeProvider>
//       <App />
//     // </ThemeProvider>
//   // </React.StrictMode>
// );


//! Example 2
// root.render(
//   // <React.StrictMode>
//     <StoreProvider>
//       <App />
//     </StoreProvider>
//   // </React.StrictMode>
// );


//! Example 3
root.render(
  <Router>
    <App />
  </Router>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
