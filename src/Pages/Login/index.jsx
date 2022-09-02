import './style.css'
import Ilistracao from '../../Images/Ilustração.svg'
import Logo from '../../Images/Logo.svg'

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
                <p>Não tem uma conta?</p>
            </div>
        </>
    )
}

export default Login;