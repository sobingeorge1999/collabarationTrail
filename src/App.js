import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Components/Navbar'
import Body from './Components/Body';
import Home from './Components/Routing/Home';
import Signmech from './Components/mechanic/Signmech';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupOwnr from './Components/owner/SignupOwnr';
import Signupcustmr from './Components/Customer/Signupcustmr';
import AddMech from './Components/owner/AddMech';
import Forgetpass from './Components/common/Forgetpass';
import Viewmech from './Components/mechanic/Viewmech';
import Userprofile from './Components/Customer/Userprofile';
import Userprofedit from './Components/Customer/Userprofedit';
import CustomerLogin from './Components/Customer/CustomerLogin';
import WorkshopLogin from './Components/owner/WorkshopLogin';
import Sign from './Components/common/Sign';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navbar/> */}
      {/* <Signmech/> */}
      {/* <Sign/> */}
      {/* <CustomerLogin/> */}
      {/* <WorkshopLogin/> */}
      {/* <Forgetpass/> */}
      {/* <Signup/> */}
      {/* <Signupcustmr/> */}
      {/* <SignupOwnr/> */}
      {/* <AddMech/> */}
      {/* <Viewmech/> */}
      {/* <Userprofile/> */}
      {/* <Userprofedit/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/CustomerLogin' element={<CustomerLogin/>}/>
        <Route path='/Signupcustmr' element={<Signupcustmr/>}/>
        <Route path='/WorkshopLogin' element={<WorkshopLogin/>}/>
        <Route path='/SignupOwnr' element={<SignupOwnr/>}/>
        <Route path='/Forgetpass' element={<Forgetpass/>}/>
        <Route path='/AddMech' element={<AddMech/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
