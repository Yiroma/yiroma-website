"use client";

import { CheckCircle, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2 } },
};

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

export function SuccessModal({ show, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <m.div
          key="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <m.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-background relative w-full max-w-md rounded-2xl p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="text-muted-foreground hover:text-foreground absolute top-4 right-4 cursor-pointer transition-colors"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <m.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { delay: 0.1, type: "spring" as const, stiffness: 300, damping: 20 },
              }}
              className="mb-5 flex justify-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/50">
                <CheckCircle
                  size={36}
                  className="text-green-600 dark:text-green-400"
                  aria-hidden="true"
                />
              </div>
            </m.div>

            <h2 className="text-foreground mb-3 text-xl font-bold">Message envoyé !</h2>
            <p className="text-muted-foreground leading-relaxed">
              Je reviens vers vous sous 24h ouvrées. Merci pour votre confiance.
            </p>

            <div className="bg-muted mt-6 h-1 w-full overflow-hidden rounded-full">
              <m.div
                className="bg-primary h-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
