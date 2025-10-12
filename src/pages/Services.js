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
            className="mx-auto mb-10 w-full max-w-md rounded-2xl shadow-xl"
          />
          <h1 className="text-4xl font-bold mb-8 text-center">Services</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Haircuts */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard">Haircuts</h2>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex justify-between items-baseline">
                  <span>Signature Cut & Style</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Signature Cut & Style (long)</span>
                  <span>$90</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>The Revival Signature Cut & Style</span>
                  <span>$100</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Clipper Cut</span>
                  <span>$55</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Bang or neck trim</span>
                  <span>$10</span>
                </div>
              </div>
            </div>
            {/* Styling */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard">Styling</h2>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex justify-between items-baseline">
                  <span>Classic Blowout</span>
                  <span>$60</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Luxe Blowout (includes hot tool)</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Wash & Diffuse Style</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Special Occasion Style</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
            {/* Extensions */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard">Extensions</h2>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex justify-between items-baseline">
                  <span>Extension Consultation</span>
                  <span>Complimentary</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Extension Install (1 row)</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Extension Install (2 rows)</span>
                  <span>$250</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Extension Move-Up</span>
                  <span>$120</span>
                </div>
              </div>
            </div>
            {/* Treatments */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard">Treatments</h2>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex justify-between items-baseline">
                  <span>Deep Conditioning</span>
                  <span>$30</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Olaplex Treatment</span>
                  <span>$45</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Scalp Treatment</span>
                  <span>$25</span>
                </div>
              </div>
            </div>
            {/* Smoothing */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard">Smoothing Treatments</h2>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex justify-between items-baseline">
                  <span>Brazilian Blowout</span>
                  <span>$250</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Keratin Treatment</span>
                  <span>$200</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Express Smoothing</span>
                  <span>$120</span>
                </div>
              </div>
            </div>
            {/* Color */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-mustard">Color</h2>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex justify-between items-baseline">
                  <span>Root Touch-Up</span>
                  <span>$85</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>All Over Color</span>
                  <span>$120</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Partial Highlight</span>
                  <span>$110</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Full Highlight</span>
                  <span>$140</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Balayage</span>
                  <span>$160</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Gloss/Toner</span>
                  <span>$40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}