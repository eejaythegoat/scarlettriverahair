import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Helmet } from "react-helmet";

function SocialBlog() {
  return (
    <div className="container">
      <Helmet>
        <title>Scarlett Rivera Hair | Social Media & Blog</title>
        <meta name="description" content="Stay connected with Scarlett Rivera Hair through social media and blog updates." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://scarlettriverahair.com/social-blog" />
      </Helmet>
      <h2>Social Media & Blog</h2>
      <p>Connect with Scarlett on social media:</p>
      <SocialLinks />
      <p className="mt-4">Scarlett’s latest posts and blog content will appear here soon!</p>
    </div>
  );
}

export default SocialBlog;