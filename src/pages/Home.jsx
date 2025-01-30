import TopNav from "../components/TopNav";
import PropertyGrid from "../components/PropertyGrid";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopNav pageTitle="Properties" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-gray-800 mb-6">Discover popular properties</h1>
        <PropertyGrid />
      </div>
    </div>
  );
}

export default Home;
