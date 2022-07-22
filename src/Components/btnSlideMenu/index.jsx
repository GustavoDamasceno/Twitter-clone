import './style.css'


function BtnSlideMenu(props) {
    return(
        <div className='contBTN'>
            <img src={`../../src/Images/${props.photo}.svg`}/>
            <p>{props.text}</p>
        </div>
    )
}

export default BtnSlideMenu