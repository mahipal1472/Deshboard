import logo from './logo.svg';
import './App.css';
import Deshboard from './Deshbord';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Demo from './Demo';


function App() {
  return (
 <>
 <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Demo" element={<Demo/>}/>
      </Routes>
 </> 
  );
}

export default App;
{/* <div className='App'>
   <div className='container-fluid bg-secondry min-vh-100'>
<div className='row'>
<div className='col-0  vh-100'>
<Deshboard/>
</div>
</div>
   </div> */}