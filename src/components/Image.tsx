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
        <div className="flex h-full items-center justify-center p-10">
          <div
            className="relative flex h-full w-11/12 max-w-4xl flex-col justify-center gap-2 border-3 border-gray-100 bg-white/80 px-5 py-5 sm:px-10 md:gap-10 md:px-25"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              ref={closeButtonRef}
              className="focus-border-gray-300 self-center border-2 border-transparent p-3 text-gray-800 hover:cursor-pointer hover:bg-gray-100 focus:outline-0 md:absolute md:top-0 md:right-0"
              onClick={onClose} // Close modal on X button click
              aria-label="Close"
            >
              <X size={24} strokeWidth={1} absoluteStrokeWidth={true} />
            </button>
            <div className="overflow-hidden">
              <img src={src} alt={alt} className="m-auto max-h-full" />
            </div>
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
        className="w-full border border-gray-300 p-1 opacity-65 outline-offset-4 outline-gray-500 hover:cursor-pointer hover:opacity-95 focus:outline-2 sm:w-auto"
        onClick={() => setIsModalOpen(true)}
        aria-label={`Open image modal for ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-28 w-full object-cover object-left-top text-sm grayscale sm:size-28"
        />
        <p className="-mx-1 mt-2 -mb-1 border-t border-gray-300 bg-gray-50 py-1 text-xs uppercase">
          Click to view
        </p>
      </button>
      {isModalOpen && (
        <PopupImage src={src} alt={alt} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
