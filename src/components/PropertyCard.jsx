import { Zap } from "lucide-react";

const PropertyCard = ({ property }) => (
  <div className="rounded-lg overflow-hidden">
    <div className="relative">
      <img src={property.image} alt={property.name} className="w-full h-52 object-cover rounded-lg" />
      {property.featured ? (
        <div className="absolute top-3 left-3 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Zap className="w-3.5 h-3.5" />
          <span>FEATURED</span>
        </div>
      ) : property.sponsored && (
        <div className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Zap className="w-3.5 h-3.5" />
          <span>Sponsored</span>
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold text-gray-900">${property.price}/mo</span>
      </div>
      <h3 className="text-md font-semibold text-gray-800 mb-2">{property.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{property.location}</p>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>{property.beds} bed</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>{property.baths} bath</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <span>{property.sqft} sqft</span>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard; 