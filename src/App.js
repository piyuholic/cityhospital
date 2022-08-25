import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import Department from './Container/Deprtments/Departments';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appointment from './Container/Appointment/Appointment';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/department"} component={Department} />
    {/* <Home /> */}
    {/* <Department /> */}
    {/* <Doctors /> */}
    {/* <About /> */}
    {/* <Contact /> */}
    <Appointment/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
