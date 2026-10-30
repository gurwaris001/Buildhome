import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({ title: '', category: 'service' });
  const [activeSyllabus, setActiveSyllabus] = useState(null);
  const [customPackage, setCustomPackage] = useState([]);

  const openBooking = (title = '', category = 'service') => {
    setBookingDetails({ title, category });
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const togglePackageItem = (item) => {
    setCustomPackage((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  const clearPackage = () => setCustomPackage([]);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isBookingOpen,
        bookingDetails,
        openBooking,
        closeBooking,
        activeSyllabus,
        setActiveSyllabus,
        customPackage,
        togglePackageItem,
        clearPackage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);