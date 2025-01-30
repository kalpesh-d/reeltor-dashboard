import { useEffect, useState, useRef, useCallback } from "react";
import PropertyCard from "./PropertyCard";
import LoadingSpinner from "./LoadingSpinner";

const PropertyGrid = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const loadMoreProperties = useCallback(() => {
    setLoading(true);
    // Simulating API call with setTimeout
    setTimeout(() => {
      const newProperties = Array(8).fill(null).map((_, index) => ({
        id: properties.length + index + 1,
        name: "Equestrian Family Home",
        price: "14,000",
        location: "California City, CA, USA",
        beds: 3,
        baths: 4,
        sqft: 1200,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        featured: Math.random() > 0.7,
        sponsored: Math.random() > 0.8
      }));
      setProperties(prev => [...prev, ...newProperties]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  }, [properties.length]);

  useEffect(() => {
    loadMoreProperties();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(entries => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        loadMoreProperties();
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loading, loadMoreProperties]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {loading && <LoadingSpinner />}
      <div ref={loader} className="h-10" />
    </div>
  );
};

export default PropertyGrid; 