import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/footer';

import Principal from './pages/Principal/principal';
import Aprende from './pages/Aprende/aprende';
import Reglamento from './pages/Reglamento/reglamento';
import Recomendaciones from './pages/Recomendaciones/recomendaciones';
import Partidos from './pages/Partidos/partidos';
import Inicio from './pages/Inicio/inicio';
import AprendeLogin from './pages/AprendeLogin/aprendeLogin'
import ReglamentoL from './pages/ReglamentoLogin/reglamentoLogin';
import RecomendacionesL from './pages/RecomendacionesLogin/RecomendacionesL';
import User from './pages/User/user'
import PartidosL from './pages/PartidosLogin/partidosL';

import Saque1 from './pages/Tutoriales/Saque/saque1';
import Saque2 from './pages/Tutoriales/Saque/saque2';
import Saque3 from './pages/Tutoriales/Saque/saque3';
import Control1 from './pages/Tutoriales/Control/control1';
import Control2 from './pages/Tutoriales/Control/control2';
import Control3 from './pages/Tutoriales/Control/control3';
import Remate1 from './pages/Tutoriales/Remate/remate1';
import Remate2 from './pages/Tutoriales/Remate/remate2';
import Remate3 from './pages/Tutoriales/Remate/remate3';

import Error from './pages/Error/error';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Principal/>} />
        <Route exact path = '/Aprende' element = {<Aprende/>} />
        <Route exact path = '/Reglamento' element = {<Reglamento/>} />
        <Route exact path = '/Recomendaciones' element = {<Recomendaciones/>} />
        <Route exact path = '/Partidos' element = {<Partidos/>} />
        <Route exact path = '/Inicio' element = {<Inicio/>} />
        <Route exact path = '/AprendeLogin' element = {<AprendeLogin/>} />
        <Route exact path = '/ReglamentoLogin' element = {<ReglamentoL/>} />
        <Route exact path = '/RecomendacionesLogin' element = {<RecomendacionesL/>} />
        <Route exact path = '/PartidosLogin' element = {<PartidosL/>} />
        <Route exact path = '/User' element = {<User/>} />
        <Route exact path = '/Saque1' element = {<Saque1/>} />
        <Route exact path = '/Saque2' element = {<Saque2/>} />
        <Route exact path = '/Saque3' element = {<Saque3/>} />
        <Route exact path = '/Control1' element = {<Control1/>} />
        <Route exact path = '/Control2' element = {<Control2/>} />
        <Route exact path = '/Control3' element = {<Control3/>} />
        <Route exact path = '/Remate1' element = {<Remate1/>} />
        <Route exact path = '/Remate2' element = {<Remate2/>} />
        <Route exact path = '/Remate3' element = {<Remate3/>} />
        <Route exact path = '/Error404' element = {<Error/>} />
        <Route exact path = '*' element = {<Navigate to = '/Error404' replace/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
