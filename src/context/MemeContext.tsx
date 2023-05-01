import { createContext, useState } from 'react';

export const MemeContext = createContext(null);

export function MemeContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const value = { isMenuOpen, setIsMenuOpen };
  return <MemeContext.Provider value={value}>{children}</MemeContext.Provider>;
}
