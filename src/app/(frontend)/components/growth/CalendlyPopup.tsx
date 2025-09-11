import React from 'react';
import { X } from 'lucide-react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyComponent: React.ReactNode;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({
  isOpen,
  onClose,
  calendlyComponent
}) => {
  // Handle escape key press
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-content"
    >
      <div className="relative  max-w-6xl w-full">        
        <div id="popup-content" className='w-full'>
          <button
          onClick={onClose}
          className="absolute -top-15 lg:top-18 right-0 lg:right-[calc(50%-450px-16px)] z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors border border-border cursor-pointer"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-text-dark" />
        </button>
          {calendlyComponent}
        </div>
      </div>
    </div>
  );
};

export default CalendlyPopup;