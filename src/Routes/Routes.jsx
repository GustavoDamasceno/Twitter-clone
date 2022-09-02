import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/';
import Login from '../Pages/Login/';

function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/feed' element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default Rotas;