import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="bg-gray-800 text-gray-300 p-6 text-center z-10"
      style={{ perspective: '1000px' }}
    >
      <p>© 2025 Amit Kumar Upadhyay. All rights reserved.</p>
    </motion.footer>
  );
}