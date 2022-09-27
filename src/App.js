import React from 'react';
import './App.css';
// import SignInOutContainer from './container';
import ResponsiveAppBar from './components/header';
import Dashboard from './pages/Dashboard';
import AppRouters from './Routers';



function App() {
  return (
    <div className="App">
      {/* <SignInOutContainer /> */}
      
      <AppRouters /> 

    </div>


  )
}

export default App;