"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingActions = ({ 
  contactNumber1 = "+918884569830"
}: { 
  contactNumber1?: string | null 
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${contactNumber1?.replace(/[^\d+]/g, '')}?text=Hi%2C%20I%20am%20interested%20in%20knowing%20more%20about%20your%20properties.`;
  const callUrl = `tel:${contactNumber1?.replace(/[^\d+]/g, '')}`;

  return (
    <div className="lg:hidden fixed right-4 bottom-24 z-[90] flex flex-col gap-3 items-end pb-safe">
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex flex-col gap-3"
          >
            {/* Call */}
            <a href={callUrl} className="w-12 h-12 bg-white text-[#2B241D] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-transform border border-[rgba(43,36,29,0.06)]">
              <Phone size={22} fill="currentColor" />
            </a>
            {/* WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.3)] flex items-center justify-center hover:bg-[#20bd5a] active:scale-95 transition-transform">
              <MessageCircle size={22} fill="currentColor" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-[#2B241D] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-transform border border-[rgba(43,36,29,0.06)]"
            >
              <ArrowUp size={22} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-[#F06400] text-[#F7F2EA] rounded-full shadow-[0_4px_16px_rgba(240,100,0,0.3)] flex items-center justify-center active:scale-95 transition-transform"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <MessageCircle size={22} />
          </motion.div>
        </button>
      </div>
    </div>
  );
};
