import './App.css';
import Header from './component/header/index';
import Footer from './component/footer';
import Home from './container/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Order from './container/order'
import SignInPage from './pages/signin/SignInPage'
import SignUpPage from './pages/signup/signupPage';
import Product from './pages/product';
import ProductDetail from './pages/productDetail'
import CartDetail from './pages/cartDetail'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <div style={{marginTop: '114px',marginBottom: '114px',marginLeft: '40px' }}>
        <Switch>
          <Route path='/signin'  component={SignInPage}></Route>
          <Route path='/signup' component={SignUpPage} ></Route>
          
          <Route path='/' exact component={Home} ></Route>
          <Route path='/product' component={Product}></Route>
          <Route path='/productDetail' component={ProductDetail}></Route>
          <Route path='/cartList' component={CartDetail}></Route>
          
          <Route path='/order' component={Order}></Route>
        </Switch>
      </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}


export default App;
