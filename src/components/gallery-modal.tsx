"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function GalleryModal({
  images,
  isOpen,
  onClose,
  title
}: GalleryModalProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      setIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md"
        >
          {/* Header controls */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-6">
            <div className="min-w-0 text-white/90">
              {title && (
                <h3 className="truncate text-sm font-medium tracking-wide text-white sm:text-base">
                  {title}
                </h3>
              )}
              <span className="mt-1 block text-xs font-semibold text-white/60">
                {index + 1} / {images.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="group grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
              aria-label="Close modal"
            >
              <X className="size-5 transition group-hover:rotate-90" />
            </button>
          </div>

          {/* Main image container */}
          <div
            className="relative flex h-full max-h-[70vh] w-full max-w-[95vw] items-center justify-center p-2 sm:p-8 lg:max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 z-10 grid size-10 place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60 hover:scale-105 active:scale-95 sm:left-6 sm:size-12"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 z-10 grid size-10 place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60 hover:scale-105 active:scale-95 sm:right-6 sm:size-12"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}

            {/* Active Image Presentation */}
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative h-full w-full flex items-center justify-center"
                >
                  <Image
                    src={images[index]}
                    alt={`${title || "Project Image"} ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain selection:bg-transparent"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Thumbnails list */}
          {images.length > 1 && (
            <div
              className="absolute bottom-6 flex max-w-full items-center gap-3 overflow-x-auto px-6 pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`relative size-14 flex-shrink-0 overflow-hidden rounded-lg ring-2 transition duration-200 hover:scale-105 ${
                    index === idx
                      ? "ring-[rgb(var(--accent))]"
                      : "ring-transparent hover:ring-white/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt="Thumbnail"
                    fill
                    className="object-cover opacity-70 transition hover:opacity-100"
                    sizes="60px"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
