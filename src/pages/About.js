import React from 'react';
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="container">
      <Helmet>
        <title>Scarlett Rivera Hair | About</title>
        <meta name="description" content="Learn more about Scarlett Rivera, a licensed cosmetologist specializing in bridal and style transformations." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://scarlettriverahair.com/about" />
      </Helmet>
      <h2>About Scarlett Rivera</h2>
      <p>Scarlett Rivera is a licensed cosmetologist and owner of Scarlett Rivera Hair LLC, proudly serving the Wheaton area. Specializing in bridal and style transformations.</p>
      <p><em>More about Scarlett's journey, credentials, and philosophy coming soon.</em></p>
    </div>
  );
}

export default About;