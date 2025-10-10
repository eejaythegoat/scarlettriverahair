import React from 'react';
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Scarlett Rivera Hair | Home</title>
        <meta name="description" content="Professional hairstylist Scarlett Rivera offering bridal and styling services in Wheaton. Book your next appointment today!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://scarlettriverahair.com/" />
      </Helmet>
      <h2>Welcome to Scarlett Rivera Hair!</h2>
      <p>Specializing in bridal, color, and style transformations in Wheaton.</p>
    </div>
  );
}

export default Home;