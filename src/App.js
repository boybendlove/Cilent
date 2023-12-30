import React, {Suspense} from 'react';
import './App.css';
import './css/custom.css'
import './css/style.default.css'
import back from "./Share/img/5bd0a7b0b5bba-wallpaper-preview.jpg"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from './Share/Footer/Footer';
import Header from './Share/Header/Header';
import Chat from './Share/Chat/Chat';
// import { Suspense } from 'react';


const Home = React.lazy(()=> import('./Home/Home'))
// const Detail = React.lazy(()=> import('./Detail/Detail'))
const Cart = React.lazy(()=> import('./Booking/Booking.jsx'))
const SignIn = React.lazy(()=> import('./Authentication/SignIn'))
const SignUp = React.lazy(()=> import('./Authentication/SignUp'))
const Checkout = React.lazy(()=> import('./Checkout/Checkout'))
const Shop = React.lazy(()=> import('./Shop/Shop'))
const SelectFights = React.lazy(()=> import('./SelectFights/select-fights.jsx'))
const Passengers = React.lazy(()=> import('./Customer/Passengers.jsx'))
const Hanoi = React.lazy(() => import('./About/Hanoi/hanoi.jsx'))
const Hoian = React.lazy(() => import('./About/Hoian/hoian.jsx'))
const Danang = React.lazy(() => import('./About/Danang/danang.jsx'))
const Hue = React.lazy(() => import('./About/Hue/hue.jsx'))
const Dalat = React.lazy(() => import('./About/Dalat/dalat.jsx'))
const Hcm = React.lazy(() => import('./About/Hcm/hcm.jsx'))
const User = React.lazy(() => import('./Profile/User/user.jsx'))
const Info = React.lazy(() => import('./Profile/Info/info.jsx'))
const History = React.lazy(() => import('./Profile/History/history.jsx'))


function App() {
  return (
    <div className="App" >
        <BrowserRouter>
          <Header />
          <Suspense fallback={<p>Loading...</p>}>
          <Switch>

            <Route exact path='/' component={Home} />
            {/* <Route path='/detail/:id' component={Detail} /> */}
            <Route path='/booking' component={Cart} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/shop' component={Shop} />
            <Route path='/select-fights' component={SelectFights} />
            <Route path='/passengers' component={Passengers} />
            <Route path='/hanoi' component={Hanoi} />
            <Route path='/hoian' component={Hoian} />
            <Route path='/danang' component={Danang} />
            <Route path='/hue' component={Hue} />
            <Route path='/dalat' component={Dalat} />
            <Route path='/hcm' component={Hcm} />
            <Route path='/user' component={User} />
            <Route path='/info' component={Info} />
            <Route path='/history' component={History} />


          </Switch>
          </Suspense>
        </BrowserRouter>

        <Chat />

      <Footer />
    </div>
  );
}

export default App;
