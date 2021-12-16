import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Postpage from './pages/Postpage'
import Datapage from './pages/Datapage'
import './App.css';

function App() {
  return (

    <BrowserRouter> 
       <Routes>
         <Route exact path='/' element={<Postpage/>}></Route>
         <Route exact path='/datapage' element={<Datapage/>}></Route>
       </Routes>
   </BrowserRouter>
  );
}

export default App;
