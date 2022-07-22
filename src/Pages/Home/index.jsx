import SlideMenu from "../../Components/slideMenu/"
import SlideColumn from "../../Components/slideColumn/"
import './styles.css'

function Home() {
  return (
    <>
      <SlideMenu/>
      <tr className="lefttr"></tr>
      
      <tr className="righttr"></tr>
      <SlideColumn/>
    </>
  )
}

export default Home
