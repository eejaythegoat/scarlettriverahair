import React from "react";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera | Services</title>
      </Helmet>
      <div className="bg-neutral-50 min-h-screen py-12">
        <div className="max-w-screen-lg mx-auto px-4">
          {/* Chair photo at the top */}
          <img
            src="/images/scarlett-chair.jpg"
            alt="Scarlett Rivera in salon"
            className="mx-auto mb-10 w-full max-w-md rounded-2xl shadow"
          />
          <h1 className="text-4xl font-bold mb-8 text-center">Services</h1>
          {/* Example service cards */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-2xl shadow p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4">Haircuts</h2>
              <div className="space-y-2 text-base md:text-lg">
                <div className="flex justify-between">
                  <span>Signature Cut & Style</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between">
                  <span>Signature Cut & Style (long)</span>
                  <span>$90</span>
                </div>
                <div className="flex justify-between">
                  <span>The Revival Signature Cut & Style</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span>Clipper Cut</span>
                  <span>$55</span>
                </div>
                <div className="flex justify-between">
                  <span>Bang or neck trim</span>
                  <span>$10</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4">Styling</h2>
              <div className="space-y-2 text-base md:text-lg">
                <div className="flex justify-between">
                  <span>Classic Blowout</span>
                  <span>$60</span>
                </div>
                <div className="flex justify-between">
                  <span>Luxe Blowout (includes hot tool)</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span>Wash & Diffuse Style</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between">
                  <span>Special Occasion Style</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
            {/* Add more service cards as needed */}
          </div>
        </div>
      </div>
    </>
  );
}