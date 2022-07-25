import './style.css'
import Searchpng from '../../Images/Search.svg'

function SlideColumn() {
    return(
        <div className='contColumn'>
            <div className='search'>
                <img src={Searchpng}/>
                <input placeholder={'Search Twitter'}></input>
            </div>

            <div className='contnews'>
                <h2>What’s happening</h2>
            </div>
            <div className='contfollow'>
                <h2>Who to follow</h2>
            </div>
            <p className='direitos'>Terms of Service Privacy Policy Cookie Policy Ads info More © 2022 Twitter, Inc.</p>
        </div>
    )
}

export default SlideColumn;