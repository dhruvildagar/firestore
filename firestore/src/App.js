 
import './App.css';
import View from './components/View';
import LoginRegister from './components/loginReg';
import Create from './components/Create';
import { BrowserRouter,Route, Routes } from "react-router-dom"; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<View/>}/>
        <Route path='/login' element={<LoginRegister/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
