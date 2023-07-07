import React from 'react';

export default function About () {
return (
  <>

    <h3>About</h3>
    <p>
      I'm a frontend web developer with a passion for creating user-friendly and visually appealing websites. I have
      experience working with a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and React.
      I also have a strong background in design, having studied it in school and honed my
      skills through projects. When I'm not coding, you can find me swimming, hiking, or working on my latest
      design project.
    </p>
    <h3>Languages</h3>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyleType: 'none', padding: 4, margin: 0, display: 'flex', gap: '10px' }}>
        <li>English</li>
        <li>Spanish</li>
      </ul>
    </div>

  </>
)
}
