import { Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SplashScreen from "./components/SplashScreen";
import WhatsappAssistant from "./components/WhatsappAssistant";
import InvoiceManager from "./components/InvoiceManager";
import LeadMachine from "./components/LeadMachine";
import StockManager from "./components/StockManager";
import Receptionist from "./components/Receptionist";
import CustomSystems from "./components/CustomSystems";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whatsapp-assistant" element={<WhatsappAssistant />} />
          <Route path="/invoice-manager" element={<InvoiceManager />} />
          <Route path="/lead-machine" element={<LeadMachine />} />
          <Route path="/stock-manager" element={<StockManager />} />
          <Route path="/receptionist" element={<Receptionist />} />
          <Route path="/custom-systems" element={<CustomSystems />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;