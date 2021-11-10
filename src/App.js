import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './Containers/header'
import ProductDetails from './Containers/productDetails';
import ProductListing from './Containers/productListing';

function App() {
  return (
    <div className="App">
<Router>
<React.Fragment>
<Header/>
<Routes>
<Route exact path="/" element={<ProductListing/>}/>
<Route exact path="/product/:productId" element={<ProductDetails/>}/>

<Route>404 Not Found</Route>

</Routes>
</React.Fragment>
  </Router>
    </div>
  );
}

export default App;
