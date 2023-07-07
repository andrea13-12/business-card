import React from "react"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import About from './About';
import Footer from './Footer';
import andreapic from './andreapic.jpg';

function Main () {
  return (
    <div>
      <img src= {andreapic} className="picture" alt="Andrea-face" style={{ width: '200px', height: '200px', marginTop: '20px' }} />
      <h1>Andrea Torres Cerdan</h1>
      <h4> Jr Frontend Developer</h4>
      <h6>andreatorres.websites</h6>
      <div className="mb-2 buttons">
        <Link to="./contact">
          <Button variant="light" size="sm" className="me-4">
           <FontAwesomeIcon icon={faEnvelope} className="me-1"/>
             Contact me
          </Button>
        </Link>

        <a href="https://www.linkedin.com/in/andrea-torres-cerdan/">
          <Button variant="primary" size="sm" >
            <FontAwesomeIcon icon={faLinkedin} className="me-1"/>
            Linkedin
          </Button>
        </a>
      </div>
      <About/>
      <Footer/>
    </div>
  )
}
export default Main;
