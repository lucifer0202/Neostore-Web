// import './App.css';
import Header from './component/header/index';
import Footer from './component/footer';
import Home from './pages/home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Order from './container/order'
import SignInPage from './pages/signin/SignInPage'
import SignUpPage from './pages/signup/signupPage';
import Product from './pages/product';
import ProductDetail from './pages/productDetail'
import CartDetail from './pages/cartDetail'
import MyAccount from './pages/myAccount';
import { AuthService } from './services/authServices';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: '114px', marginBottom: '114px' }}>
          <Switch>
            <Route path='/signin' component={SignInPage}></Route>
            <Route path='/signup' component={SignUpPage} ></Route>

            <Route path='/' exact component={Home} ></Route>
            <Route path='/product' component={Product}></Route>
            <Route path='/productDetail' component={ProductDetail}></Route>

            <PrivateRoute path='/cartList' component={CartDetail}/>
            <PrivateRoute path='/order' component={Order}/>
            <PrivateRoute path='/myAccount' component={MyAccount} />

          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}


const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = AuthService.getAccessToken() ? true: false;

  return (
    <Route {...rest} exact
      render={(props) => (
        isAuthenticated ? (
          <Component {...props}/>
        ) :
          (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: props.location }
              }}
            />
          )
      )}
    />
  )
}


export default App;
