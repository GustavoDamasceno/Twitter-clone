import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/';
import Login from '../Pages/Login/';

function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/cadastro' element={<h1>Area de cadastro!</h1>}/>
                <Route path='/feed' element={<Home/>}/>
                <Route path='/perfil' element={<h1>Area de perfil!</h1>}/>
            </Routes>
        </Router>
    );
}

export default Rotas;