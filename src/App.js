import './App.css';
import Header from './component/header/index';
import Footer from './component/footer';
import Home from './container/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './container/product';
import Order from './container/order'
import SignInPage from './pages/signin/SignInPage'
import SignUpPage from './pages/signup/signupPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <div style={{height: '100vh',marginTop: '114px' }}>
        <Switch>
          <Route path='/signin'  component={SignInPage}></Route>
          <Route path='/signup' component={SignUpPage} ></Route>
          
          <Route path='/home'  component={Home} ></Route>
          <Route path='/product' component={Product}></Route>
          
          <Route path='/order' component={Order}></Route>
        </Switch>
      </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}


export default App;
