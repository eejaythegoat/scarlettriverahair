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
          <img
            src="/images/scarlett-chair.jpg"
            alt="Scarlett Rivera in salon"
            className="mx-auto mb-10 w-full max-w-md rounded-2xl shadow-xl object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-10 text-center text-gray-900">Services</h1>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Haircuts */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-serif font-bold mb-4 text-mustard">Haircuts</h2>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Signature Cut & Style</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between">
                  <span>Signature Cut & Style (the longer version)</span>
                  <span>$90</span>
                </div>
                <div className="flex justify-between">
                  <span>The Revival Signature Cut & Style</span>
                  <span>$100</span>
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
            {/* Styling */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-serif font-bold mb-4 text-mustard">Styling</h2>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Classic Blowout</span>
                  <span>$60</span>
                </div>
                <div className="flex justify-between">
                  <span>Luxe Blowout (includes a hot tool)</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between">
                  <span>Color Finish</span>
                  <span>$50</span>
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
            {/* Extensions */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-serif font-bold mb-4 text-mustard">Hair Extensions</h2>
              <div className="text-lg mb-3">Prices vary upon consultation</div>
            </div>
            {/* Treatments */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-serif font-bold mb-4 text-mustard">Treatments</h2>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Keratin Express</span>
                  <span>$200+</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Keratin</span>
                  <span>$350+</span>
                </div>
                <div className="text-sm italic text-gray-600">
                  *Prices subject to change depending on length and density of hair*
                </div>
                <div className="flex justify-between">
                  <span>Vitalshot</span>
                  <span>$30</span>
                </div>
                <div className="flex justify-between">
                  <span>Epres</span>
                  <span>$30</span>
                </div>
                <div className="flex justify-between">
                  <span>K18</span>
                  <span>$30</span>
                </div>
                <div className="flex justify-between">
                  <span>Conditioning</span>
                  <span>$20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}