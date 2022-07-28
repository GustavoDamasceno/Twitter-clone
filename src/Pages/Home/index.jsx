import SlideMenu from "../../Components/slideMenu/"
import SlideColumn from "../../Components/slideColumn/"
import toptweet from "../../Images/toptweet.svg"
import profileimg from "../../Images/Small.svg"
import poll from "../../Images/poll.svg"
import gif from "../../Images/gif.svg"
import emoji from "../../Images/emoji.svg"
import schedule from "../../Images/schedule.svg"
import media from "../../Images/media.svg"
import './styles.css'

function Home() {
  return ( 
    <>
      <SlideMenu/>
      <tr className="lefttr"></tr>
      
      <div className="namepage">
        <h2>Home</h2>
        <img src={toptweet}/>
      </div>

      <div className="tweet">
        <img className="blprofile" src={profileimg}/>
        <textarea className="txttweet" placeholder="What’s happening?"/>
        <div className="contbtns">
          <button className='btns'><img src={media}/></button>
          <button className='btns'><img src={gif}/></button>
          <button className='btns'><img src={poll}/></button>
          <button className='btns'><img src={emoji}/></button>
          <button className='btns'><img src={schedule}/></button>
        </div>
        <div className="btntweet">Tweet</div>
      </div>

      <div className="separador"></div>

      <tr className="righttr"></tr>
      <SlideColumn/>
    </>
  )
}

export default Home
