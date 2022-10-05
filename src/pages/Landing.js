// import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/styles/LandingPage';
import { Logo } from '../components';
// import Wrapper from '../assets/styles/Testing'

const Landing = () => {  
    return ( 
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */} 
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
                Jobster website provides an easy and optimal 
                way of adverting your job vacancies to 
                have high quality of applications and 
                increase the chances to find the right 
                candidate. 
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    );
  };
  
  export default Landing;