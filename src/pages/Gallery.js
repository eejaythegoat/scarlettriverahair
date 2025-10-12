import React from "react";
import { Helmet } from "react-helmet-async";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera Hair | Gallery</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        {/* Instagram Widget Embed Example:
        <div className="mb-8">
          <iframe src="INSTAGRAM_WIDGET_EMBED_URL" style={{width: "100%", height: "400px", border: 0}} scrolling="no" allowtransparency="true" title="Instagram Gallery"></iframe>
        </div>
        */}
        {/* Custom Grid Gallery Example */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/gallery/photo1.jpg" alt="Gallery photo 1" className="rounded-xl object-cover aspect-square"/>
          <img src="/images/gallery/photo2.jpg" alt="Gallery photo 2" className="rounded-xl object-cover aspect-square"/>
          <img src="/images/gallery/photo3.jpg" alt="Gallery photo 3" className="rounded-xl object-cover aspect-square"/>
          {/* Add more images as needed */}
        </div>
      </div>
    </>
  );
}