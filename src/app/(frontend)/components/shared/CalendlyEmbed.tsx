"use client"

import React, { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  minHeight?: string | number;
  width?: string;
  className?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ 
  url, 
  minHeight = "650px", 
  width = "100%",
  className = "calendly-inline-widget"
}) => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="calendly"]');
    
    if (!existingScript) {
      const head = document.querySelector("head");
      const script = document.createElement("script");
      script.setAttribute(
        "src",
        "https://assets.calendly.com/assets/external/widget.js"
      );
      script.async = true;
      
      if (head) {
        head.appendChild(script);
      }
    }

    return () => {
      const script = document.querySelector('script[src*="calendly"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className={className}
      data-url={url}
      style={{ minHeight, width }}
    />
  );
};

export default CalendlyEmbed;