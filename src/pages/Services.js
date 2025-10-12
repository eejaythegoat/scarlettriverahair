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
            onError={e => { e.target.style.display = "none"; }}
          />
          <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 font-sans tracking-tight">Behind the Chair</h1>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Haircuts */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard font-sans tracking-tight">Haircuts</h2>
              <ul className="space-y-3 text-lg list-disc list-inside pl-2">
                <li className="flex justify-between">
                  <span>Signature Cut & Style</span>
                  <span>$75</span>
                </li>
                <li className="flex justify-between">
                  <span>Signature Cut & Style (the longer version)</span>
                  <span>$90</span>
                </li>
                <li className="flex justify-between">
                  <span>The Revival Signature Cut & Style</span>
                  <span>$100</span>
                </li>
                <li className="flex justify-between">
                  <span>Clipper Cut</span>
                  <span>$55</span>
                </li>
                <li className="flex justify-between">
                  <span>Bang or neck trim</span>
                  <span>$10</span>
                </li>
              </ul>
            </div>
            {/* Styling */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard font-sans tracking-tight">Styling</h2>
              <ul className="space-y-3 text-lg list-disc list-inside pl-2">
                <li className="flex justify-between">
                  <span>Classic Blowout</span>
                  <span>$60</span>
                </li>
                <li className="flex justify-between">
                  <span>Luxe Blowout (includes a hot tool)</span>
                  <span>$75</span>
                </li>
                <li className="flex justify-between">
                  <span>Color Finish</span>
                  <span>$50</span>
                </li>
                <li className="flex justify-between">
                  <span>Wash & Diffuse Style</span>
                  <span>$50</span>
                </li>
                <li className="flex justify-between">
                  <span>Special Occasion Style</span>
                  <span>$100</span>
                </li>
              </ul>
            </div>
            {/* Hair Extensions */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard font-sans tracking-tight">Hair Extensions</h2>
              <ul className="text-lg list-disc list-inside pl-2 space-y-2">
                <li>Scarlett offers a variety of hair extension options and methods to suit your needs and lifestyle.</li>
                <li>Pricing and method are determined during a personal consultation to ensure the best fit.</li>
                <li className="font-semibold text-mustard">Prices vary upon consultation.</li>
              </ul>
            </div>
            {/* Treatments */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard font-sans tracking-tight">Treatments</h2>
              <ul className="space-y-3 text-lg list-disc list-inside pl-2">
                <li className="flex justify-between">
                  <span>Keratin Express</span>
                  <span>$200+</span>
                </li>
                <li className="flex justify-between">
                  <span>Full Keratin</span>
                  <span>$350+</span>
                </li>
                <li className="italic text-sm ml-1 text-gray-600">
                  *Prices subject to change depending on length and density of hair*
                </li>
                <li className="flex justify-between">
                  <span>Vitalshot</span>
                  <span>$30</span>
                </li>
                <li className="flex justify-between">
                  <span>Epres</span>
                  <span>$30</span>
                </li>
                <li className="flex justify-between">
                  <span>K18</span>
                  <span>$30</span>
                </li>
                <li className="flex justify-between">
                  <span>Conditioning</span>
                  <span>$20</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}