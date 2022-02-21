import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddProduct from './components/AddProduct';
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route path="/" element={<ProductList />}/>
            <Route path="/add" element={<AddProduct />}/>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
