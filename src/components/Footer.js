import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer () {
  return (
    <div className='footer' style={{position: 'bottom', margin: 3}}>
      <a href='https://github.com/andrea13-12' className="me-2">
       <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.2rem' }}/>
      </a>

      <a href='https://www.linkedin.com/in/andrea-torres-cerdan/'>
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.2rem', gab: 5}}/>
      </a>
    </div>
  )
}
