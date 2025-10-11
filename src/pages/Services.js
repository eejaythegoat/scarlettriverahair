import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <section className="pt-24 pb-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Behind the Chair</h1>
        <p className="text-lg text-gray-600">Precision, artistry, and a great conversation.</p>
      </section>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Haircuts */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Haircuts</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Signature Cut & Style <span className="float-right font-medium">$75</span></li>
            <li>Signature Cut & Style (long) <span className="float-right font-medium">$90</span></li>
            <li>The Revival Signature Cut & Style <span className="float-right font-medium">$100</span></li>
            <li>Clipper Cut <span className="float-right font-medium">$55</span></li>
            <li>Bang or neck trim <span className="float-right font-medium">$10</span></li>
          </ul>
        </div>
        {/* Styling */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Styling</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Classic Blowout <span className="float-right font-medium">$60</span></li>
            <li>Luxe Blowout (includes hot tool) <span className="float-right font-medium">$75</span></li>
            <li>Wash & Diffuse Style <span className="float-right font-medium">$50</span></li>
            <li>Special Occasion Style <span className="float-right font-medium">$100</span></li>
          </ul>
        </div>
        {/* Extensions */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Extensions</h2>
          <p className="text-gray-700 mb-2">Bellami-certified hair extensions. Consultation required for pricing.</p>
        </div>
        {/* Treatments */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Treatments</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Keratin Express <span className="float-right font-medium">$200+</span></li>
            <li>Full Keratin <span className="float-right font-medium">$350+</span></li>
            <li>Vitalshot <span className="float-right font-medium">$30</span></li>
            <li>Epres <span className="float-right font-medium">$30</span></li>
            <li>K18 <span className="float-right font-medium">$30</span></li>
            <li>Conditioning <span className="float-right font-medium">$20</span></li>
          </ul>
          <p className="text-xs italic mt-2">*Prices subject to change depending on length and density of hair.</p>
        </div>
      </div>
    </div>
  );
}