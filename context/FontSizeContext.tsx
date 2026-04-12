import React, { createContext, ReactNode, useContext, useState } from "react";

interface FontSizeContextType {
  fontSizeMultiplier: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);

  const increaseFontSize = () => {
    setFontSizeMultiplier((prev) => Math.min(prev + 0.2, 2));
  };

  const decreaseFontSize = () => {
    setFontSizeMultiplier((prev) => Math.max(prev - 0.2, 0.8));
  };

  return (
    <FontSizeContext.Provider
      value={{ fontSizeMultiplier, increaseFontSize, decreaseFontSize }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};
