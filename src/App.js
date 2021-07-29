import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Home from './container/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './container/product';
import Order from './container/order'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/product' component={Product}></Route>
          <Route path='/order' component={Order}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
