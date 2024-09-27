import React, { createContext, useContext, useState } from 'react';

const PlatformContext = createContext();

export const usePlatform = () => useContext(PlatformContext);

export const PlatformProvider = ({ children }) => {
  const [activePlatform, setActivePlatform] = useState('Facebook'); // Initialize with LinkedIn or empty

  return (
    <PlatformContext.Provider value={{ activePlatform, setActivePlatform }}>
      {children}
    </PlatformContext.Provider>
  );
};
