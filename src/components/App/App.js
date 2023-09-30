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
  const headerButtons = [{"name":"FIRST","link":"/"},
                         {"name":"SECOND","link":"/travel"},
                         {"name":"test","link":"/test"},
                         {"name":"THIRD","link":"/dashboard"}]
  return (
    <div className="wrapper" style={{height:"100vh"}}>
    <BrowserRouter>
      <Header buttons={headerButtons}/>
      <Routes>
        <Route path="/" Component={DigitalFeedback}/>
        <Route path="/travel" Component={Travel}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/test" Component={Test}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;