import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainContent } from './layout/MainContent';
import { Sidebar } from './layout/Sidebar.js';
import { Router } from './pages/Router';
import { io } from "socket.io-client";
import { useEffect, useRef } from 'react';

const styles = {
  display: "flex",
  height: '100vh'
}
//const socket = io("http://localhost:5000");

function App() {


  return (
    <div style={styles} >
      <Sidebar />
      <MainContent  />
    </div>
  );
}

export default App;
