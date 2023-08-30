import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ic_github  from './../../assets/ic_github.png'
import ic_linkedin  from './../../assets/ic_linkedin.png'
import './Home.css'
function Home() {
  return  <div className='d-flex home'>
    <div className="greeting w-50">
      <p>
        Hi<br/>
        I'm <span className="yordii">Yordii</span>
        <br/>
        web developer
      </p>     
      <div role='button' className='rounded download-cv-btn d-flex align-items-center'>
        <p className='m-0 mx-2'>Download curriculum</p>
      <FontAwesomeIcon icon={faArrowDown} size='xm' className='mx-2'/>
      </div>
      
    </div>
    <div className="about-me w-50 rounded">
      <div className="title">
        About me
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Et atque odio consequuntur aliquid sit sunt debitis consectetur 
        impedit magni animi natus, quisquam repellat officiis tenetur 
        harum hic voluptate, tempore dignissimos!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Et atque odio consequuntur aliquid sit sunt debitis consectetur 
        impedit magni animi natus, quisquam repellat officiis tenetur 
        harum hic voluptate, tempore dignissimos!
      </div>
      <div className="aditionals d-flex align-items-center justify-content-between">
        <div className="idioms">
          <p className='title m-0'>I speak</p>
          <div className="content">
          <p  >Spanish | English</p>

          </div>
        </div>
        <div className="socials">
          <a href="https://github.com/Yordii-CE" target='_blank'>
            <img className='mx-4' src={ic_github}/>
          </a>
          <a href="">
            <img src={ic_linkedin}/>
          </a>
        </div>
      </div>
    </div>
  </div>
}

export default Home