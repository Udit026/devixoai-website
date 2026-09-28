// import { Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import Features from "./pages/Features";
// import Pricing from "./pages/Pricing";
// import Blog from "./pages/Blog";
// import BlogDetails from "./pages/BlogDetails";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Integration from "./pages/Integration";
// import Faq from "./pages/Faq";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Solution from "./pages/Solution";
// import AIAutomation from "./pages/solutions/AIAutomation";
// import CRM from "./pages/solutions/CRM";
// import AIChatbotSupport from "./pages/solutions/AIChatbotSupport";
// import AIDataAnalytics from "./pages/solutions/AIDataAnalytics";
// import CustomAIDevelopment from "./pages/solutions/CustomAIDevelopment";

// export default function App() {
//   return (
//     <MainLayout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blog/:id" element={<BlogDetails />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/integration" element={<Integration />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/solutions/:slug" element={<Solution />} />
//         <Route path="/solutions/ai-automation" element={<AIAutomation />} />
//         <Route path="/solutions/crm" element={<CRM />} />
//         <Route path="/solutions/ai-chatbot" element={<AIChatbotSupport />} />
//         <Route path="/solutions/data-analytics" element={<AIDataAnalytics />} />
//         <Route path="/solutions/custom-ai" element={<CustomAIDevelopment />} />
//       </Routes>
//     </MainLayout>
//   );
// }




import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Integration from "./pages/Integration";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Solution from "./pages/Solution";
import AIAutomation from "./pages/solutions/AIAutomation";
import CRM from "./pages/solutions/CRM";
import AIChatbotSupport from "./pages/solutions/AIChatbotSupport";
import AIDataAnalytics from "./pages/solutions/AIDataAnalytics";
import CustomAIDevelopment from "./pages/solutions/CustomAIDevelopment";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Real page renders underneath from the start — the splash just
          covers it with a solid circle, then that circle shrinks away
          to reveal the page that's already there. */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/solutions/:slug" element={<Solution />} />
          <Route path="/solutions/ai-automation" element={<AIAutomation />} />
          <Route path="/solutions/crm" element={<CRM />} />
          <Route path="/solutions/ai-chatbot" element={<AIChatbotSupport />} />
          <Route path="/solutions/data-analytics" element={<AIDataAnalytics />} />
          <Route path="/solutions/custom-ai" element={<CustomAIDevelopment />} />
        </Routes>
      </MainLayout>

      <AnimatePresence>{loading && <SplashScreen />}</AnimatePresence>
    </>
  );
}