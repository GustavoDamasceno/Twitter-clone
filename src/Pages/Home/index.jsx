import SlideMenu from "../../Components/slideMenu/"
import SlideColumn from "../../Components/slideColumn/"
import toptweet from "../../Images/toptweet.svg"
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
      <div className="tweet"></div>

      <tr className="righttr"></tr>
      <SlideColumn/>
    </>
  )
}

export default Home
