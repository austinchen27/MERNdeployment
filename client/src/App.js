import React from 'react';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import Details from './views/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Create />} path="/pet/create" />
        <Route element={<Edit />} path="/pet/edit/:id" />
        <Route element={<Details />} path="/pet/onePet/:id" />
      </Routes>
    </>
  );
}

export default App;
