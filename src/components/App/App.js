import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import useToken from './useToken';
import Header from '../Header/Header';
import DigitalFeedback from '../DigitalFeedback/DigitalFeedback';
import Travel from '../Travel/Travel';
import Test from '../Test/Test';
function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  const headerButtons = [{"id":1,"name":"FIRST","link":"/"},
                         {"id":2,"name":"SECOND","link":"/travel"},
                         {"id":3,"name":"THIRD","link":"/dashboard"}]
  return (
    <div className="wrapper" style={{height:"100vh"}}>
    <BrowserRouter>
      <Header buttons={headerButtons}/>
      <Routes>
        <Route path="/" Component={DigitalFeedback}/>
        <Route path="/travel" Component={Travel}/>
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;