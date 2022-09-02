import './style.css'
import Ilistracao from '../../Images/Ilustração.svg'
import Logo from '../../Images/Logo.svg'
import {Link} from 'react-router-dom';

function Login () {
    return(
        <>
            <div className='bannerLogin'>
                <div className='contText'>
                    <h2>Veja o que</h2>
                    <h2 className='bug'>está acontecendo agora</h2>
                    <p>Inscreva-se no Twitter hoje mesmo</p>
                </div>
                <img src={Ilistracao}/>
                <p className='autoria'>© 2022 Twitter, Inc.</p>
            </div>

            <div className='conttop'>
                <img src={Logo}></img>
                <p>Não tem uma conta? <Link className='linktocadastro' to='/cadastro'>Inscreva-se</Link></p>
            </div>

            <h1 className='toptextlog'>Descubra o que está em alta</h1>

            <h2 className='middletextlog'>Entre no Twitter</h2>
        </>
    )
}

export default Login;