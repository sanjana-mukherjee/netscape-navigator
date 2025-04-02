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
        <div className="h-full flex items-center justify-center">
          <div
            className="w-11/12 max-w-4xl bg-gray-50/80 py-5 px-5 sm:px-10 md:px-25 lg:px-35 flex flex-col items-center justify-center gap-2 md:gap-10 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              ref={closeButtonRef}
              className="md:absolute md:top-0 md:right-0 p-3 text-gray-800 hover:cursor-pointer hover:bg-gray-200 focus-border-gray-300 border-transparent border-2 focus:outline-0"
              onClick={onClose} // Close modal on X button click
              aria-label="Close"
            >
              <X size={24} strokeWidth={1} absoluteStrokeWidth={true} />
            </button>
            <img src={src} alt={alt} />
            <p
              id="popup-image-title"
              className="font-melodrama font-normal text-xl md:text-3xl uppercase text-center"
            >
              {alt}
            </p>
          </div>
        </div>
      </InteractiveBackground>
    </div>,
    document.body // Render the modal at the root level
  );
}

export default function Image({ src, alt }: { src: string; alt: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-right relative pt-2">
      <button
        className="bg-gray-50 relative h-28 w-full opacity-65 sm:size-28 hover:cursor-pointer hover:opacity-95 focus:outline-2 outline-gray-500 outline-offset-4 border border-gray-300"
        onClick={() => setIsModalOpen(true)}
        aria-label={`Open image modal for ${alt}`}
      >
        <p className="text-xs z-10 absolute bottom-0 right-0 sm:left-0 py-1 px-4 bg-white border-t border-l sm:border-l-0 border-gray-300">
          Click to view
        </p>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-left-top grayscale text-sm"
        />
      </button>
      {isModalOpen && (
        <PopupImage src={src} alt={alt} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
