import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="mt-4 text-slate-600"
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;