import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import TopBar from "./components/TopBar.jsx";
import ProductCategories from "./components/ProductCategories.jsx";
import TrustFeatures from "./components/TrustFeatures.jsx";
import AboutSection from "./components/AboutSection.jsx";
import StoreInformation from "./components/StoreInformation.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <a
        className="sr-only z-50 rounded-md bg-brand-yellow px-4 py-3 font-bold text-brand-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-2 focus:outline-offset-2 focus:outline-brand-green"
        href="#main-content"
      >
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <TrustFeatures />
        <ProductCategories />
        <AboutSection />
        <StoreInformation />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
