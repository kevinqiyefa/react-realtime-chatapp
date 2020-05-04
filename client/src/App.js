import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </BrowserRouter>
    </div>
  );
}

export default App;
