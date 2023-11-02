import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router';

import { AnimatedLayoutProps } from './AnimatedLayout.types';

const AnimatedLayout: FC<AnimatedLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLayout;
