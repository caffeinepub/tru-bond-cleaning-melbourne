import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const WA_LINK = "https://wa.me/61488841883";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.floating.button"
      aria-label="Chat with Tru Bond Cleaning Melbourne on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-green font-semibold text-sm pl-4 pr-5 py-3 hover:bg-[#1ebe5d] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}
