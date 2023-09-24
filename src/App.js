import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/services' element={<Testimonials/>}/>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
