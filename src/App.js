
import { Routes, Route } from "react-router-dom"; 
import React, { Fragment } from 'react'; 
import Main from '../page/Main'; 
import About from './page/About'; 
import Layout from './layout/Layout'; 
 
class App extends React.Component { 
  render() { 
    return ( 
      <Fragment> 
        <Routes> 
          <Route path="/" element={<Layout />}> 
            <Route index element={<Main />} /> 
            <Route path="about" element={<About />} /> 
 

 
          </Route> 
        </Routes> 
      </Fragment> 
    ) 
  } 
} 
export default App