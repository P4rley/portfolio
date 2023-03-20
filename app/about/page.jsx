"use client";

import { motion } from "framer-motion";
import AboutSection from "../../components/AboutSection";
import AboutContent from "../../components/AboutContent";
import Footer from "../../components/Footer";
import Layout from "../../pages/Scrollbar";
import Scroll from "../../pages/Scrollbar";

const page = () => {
  return (
    <Scroll>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <AboutSection />
        <AboutContent />
        <Footer />
      </motion.div>
    </Scroll>
  );
};
export default page;
