import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './Components/layout/Navbar';
import { Footer } from './Components/layout/Footer';
import { BookingModal } from './Components/features/BookingModel';
import { SyllabusModal } from './Components/features/SyllabusModel';

import { HomePage } from './pages/HomePage';
import ServicesPage  from './pages/ServicesPage';
import { CoursesPage } from './pages/CoursesPage';
import { PackagesPage } from './pages/PackagesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const MainContent = () => {
  const { activeTab } = useApp();

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'services': return <ServicesPage />;
      case 'courses': return <CoursesPage />;
      case 'packages': return <PackagesPage />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0b0b0f]">
      <div>
        <Navbar />
        <main>{renderPage()}</main>
      </div>
      <Footer />
      <BookingModal />
      <SyllabusModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}