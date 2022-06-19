import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Home from './REACT_ROUTING/Home'
import Navbar from './REACT_ROUTING/Navbar';
import Product from './REACT_ROUTING/Product';
import ProductDetails from './REACT_ROUTING/ProductDetails';
import NotFound from './REACT_ROUTING/NotFound';

function App() {
  return (
     <div >
      < Navbar />
       <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/Product' element={< Product />}></Route>
        <Route path='/Product/ProductDetails/:id' element={< ProductDetails />}></Route>
        <Route path='*' element={< NotFound />}></Route>
       </Routes>
    </div> 
  );
}

export default App;
