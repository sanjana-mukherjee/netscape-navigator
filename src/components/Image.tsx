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
            className="max-w-4xl bg-gray-50/80 py-5 px-35 flex flex-col items-center justify-center gap-10 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img src={src} alt={alt} />
            <p
              id="popup-image-title"
              className="font-melodrama font-normal text-3xl uppercase text-center"
            >
              {alt}
            </p>
            <button
              ref={closeButtonRef}
              className="absolute top-0 right-0 p-3 text-gray-800 hover:cursor-pointer hover:bg-gray-200 border-gray-300 focus:border-2 focus:outline-0"
              onClick={onClose} // Close modal on X button click
              aria-label="Close"
            >
              <X size={24} strokeWidth={1} absoluteStrokeWidth={true} />
            </button>
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
    <div className="text-right">
      <button
        className="bg-gray-50 size-28 opacity-65 hover:cursor-pointer hover:opacity-85 focus:outline-2 outline-gray-500 outline-offset-4"
        onClick={() => setIsModalOpen(true)}
        aria-label={`Open image modal for ${alt}`}
      >
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
