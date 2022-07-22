import './style.css'
import avatar from '../../Images/Small.svg'
import ImgProfileMenu from '../../Images/Group.svg'
import BtnSlideMenu from '../btnSlideMenu'
import Logo from '../../Images/Logo.svg'

function SlideMenu() {
    return (
      <div className='contMenu'>
        <div className='topMenu'>
          <div className='logott'>
            <img src={Logo}/>
          </div>
          <BtnSlideMenu photo={'home'} text={'Home'}/>
          <BtnSlideMenu photo={'explore'} text={'Explore'}/>
          <BtnSlideMenu photo={'notifications'} text={'Notifications'}/>
          <BtnSlideMenu photo={'messages'} text={'Messages'}/>
          <BtnSlideMenu photo={'book'} text={'Bookmarks'}/>
          <BtnSlideMenu photo={'lists'} text={'Lists'}/>
          <BtnSlideMenu photo={'profile'} text={'Profile'}/>
          <BtnSlideMenu photo={'more'} text={'More'}/>
          <button className='tweetmenu'>Tweet</button>
        </div>
        <div className='profileMenu'>
            <img src={avatar} />
            <h3>Jerome Bell</h3>
            <p>@afonsoinocente</p>
            <button>
              <img src={ImgProfileMenu} />
            </button>
        </div>
      </div>
    )
  }
  
export default SlideMenu