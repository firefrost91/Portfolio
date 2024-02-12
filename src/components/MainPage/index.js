// Import necessary dependencies
import React from 'react';
import coding from '../../resources/images/coding.svg'


// Create the LandingPage component
const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">

        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      <section className="intro-section">
        <p>
        <img
          src = {coding}
          alt="Your Name"
          className="profile-image"
        />
          Welcome to my portfolio! I'm a passionate web developer with expertise
          in front-end technologies.
        </p>
        <p>
          Let's work together to create amazing web experiences. Check out my
          projects and get in touch!
        </p>
      </section>

      <section className="cta-section">
      </section>

      <footer className="footer">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
