import React from "react";
import "./index.css"; // Optional, for custom styles later

function App() {
  return (
    <div className="App">
      <header>
        <h1>Math Tutoring with [Your Mom's Name]</h1>
      </header>

      <section className="about">
        <h2>Who I Am</h2>
        <p>
          Hi, I'm [Your Mom's Name], and I offer personalized math tutoring for
          students of all ages. Whether you're struggling with algebra, calculus, or
          geometry, I can help you improve your skills and confidence.
        </p>
      </section>

      <section className="services">
        <h2>What I Offer</h2>
        <ul>
          <li>One-on-one tutoring sessions</li>
          <li>Homework help</li>
          <li>Test preparation</li>
          <li>Online sessions available</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>For more information or to schedule a session, please reach out to me at:</p>
        <a href="mailto:yourmom@example.com">yourmom@example.com</a>
      </section>

      <footer>
        <p>&copy; 2025 Math Tutoring by [Your Mom's Name]</p>
      </footer>
    </div>
  );
}

export default App;
