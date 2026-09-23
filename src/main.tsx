import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles.css";

import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import GalleryPage from "./routes/gallery";
import ContactPage from "./routes/contact";
import FaqPage from "./routes/faq";
import NotFound from "./routes/not-found";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
