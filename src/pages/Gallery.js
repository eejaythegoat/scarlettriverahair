import React from 'react';
import { Helmet } from "react-helmet";

function Gallery() {
  // Replace with real images as you receive them
  const placeholderImages = [
    "https://via.placeholder.com/300x200?text=Style+1",
    "https://via.placeholder.com/300x200?text=Style+2",
    "https://via.placeholder.com/300x200?text=Style+3",
  ];

  return (
    <div className="container">
      <Helmet>
        <title>Scarlett Rivera Hair | Gallery</title>
        <meta name="description" content="Explore the gallery of Scarlett Rivera Hair showcasing stunning hairstyles and transformations." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://scarlettriverahair.com/gallery" />
      </Helmet>
      <h2>Gallery</h2>
      <div className="row">
        {placeholderImages.map((src, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <img src={src} alt={`Gallery ${i}`} className="img-fluid rounded shadow-sm" />
          </div>
        ))}
      </div>
      <p className="text-muted">Scarlett's portfolio coming soon!</p>
    </div>
  );
}

export default Gallery;