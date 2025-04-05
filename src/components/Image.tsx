import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import InteractiveBackground from "./InteractiveBackground";

function PopupImage({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Focus the close button when the modal opens
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(); // Close modal on Escape key press
      }
    };

    document.body.classList.add("overflow-hidden"); // Prevent body scroll when modal is open
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden"); // Re-enable body scroll when modal is closed
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-white"
      onClick={onClose} // Close modal on backdrop click
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-image-title"
    >
      <InteractiveBackground>
        <div className="flex h-full items-center justify-center">
          <div
            className="relative flex w-11/12 max-w-4xl flex-col items-center justify-center gap-2 bg-gray-50/80 px-5 py-5 sm:px-10 md:gap-10 md:px-25 lg:px-35"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              ref={closeButtonRef}
              className="focus-border-gray-300 border-2 border-transparent p-3 text-gray-800 hover:cursor-pointer hover:bg-gray-200 focus:outline-0 md:absolute md:top-0 md:right-0"
              onClick={onClose} // Close modal on X button click
              aria-label="Close"
            >
              <X size={24} strokeWidth={1} absoluteStrokeWidth={true} />
            </button>
            <img src={src} alt={alt} />
            <p
              id="popup-image-title"
              className="font-melodrama text-center text-xl font-normal uppercase md:text-3xl"
            >
              {alt}
            </p>
          </div>
        </div>
      </InteractiveBackground>
    </div>,
    document.body, // Render the modal at the root level
  );
}

export default function Image({ src, alt }: { src: string; alt: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative pt-2 text-right">
      <button
        className="relative h-28 w-full border border-gray-300 bg-gray-50 opacity-65 outline-offset-4 outline-gray-500 hover:cursor-pointer hover:opacity-95 focus:outline-2 sm:size-28"
        onClick={() => setIsModalOpen(true)}
        aria-label={`Open image modal for ${alt}`}
      >
        <p className="absolute right-0 bottom-0 z-10 border-t border-l border-gray-300 bg-white px-4 py-1 text-xs sm:left-0 sm:border-l-0">
          Click to view
        </p>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-left-top text-sm grayscale"
        />
      </button>
      {isModalOpen && (
        <PopupImage src={src} alt={alt} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
