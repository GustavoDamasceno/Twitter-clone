import './style.css'
import avatar from '../../Images/Small.svg'

function SlideMenu() {
    return (
      <div className='contMenu'>
        <div className='topMenu'></div>
        <div className='profileMenu'>
            <img src={avatar} />
            <h3>Jerome Bell</h3>
            <p>@afonsoinocente</p>
            
        </div>
      </div>
    )
  }
  
  export default SlideMenu